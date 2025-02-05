import crypto from "crypto";
import { revalidatePath, revalidateTag } from "next/cache";

const MILLISECONDS_PER_SECOND = 1_000;
const SIGNATURE_VERSION = "1";

/**
 * Parses the signature header and returns the timestamp and signature.
 *
 * @example
 * parseSignatureHeader('t=1629780000,v1=0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b')
 */

function parseSignatureHeader(header: string) {
  const parts = header.split(",");
  const timestamp = parts.find((part) => part.startsWith("t="))?.split("=")[1];
  const signature = parts
    .find((part) => part.startsWith(`v${SIGNATURE_VERSION}=`))
    ?.split("=")[1];

  if (!timestamp || !signature) {
    return { success: false as const, data: null };
  }

  return {
    success: true as const,
    data: { timestamp: parseInt(timestamp, 10), signature },
  };
}

type CreateSignatureOptions = {
  /**
   * The timestamp of the signature.
   */
  timestamp: number;
  /**
   * The payload to be signed.
   */
  payload?: Record<string, unknown>;
  /**
   * The secret of your webhook (`whsec_...`).
   */
  secret: string;
};

function createSignature(options: CreateSignatureOptions) {
  const { timestamp, payload, secret } = options;
  const signedPayloadString = `${timestamp}.${
    payload ? JSON.stringify(payload) : ""
  }`;
  return crypto
    .createHmac("sha256", secret)
    .update(signedPayloadString)
    .digest("hex");
}

type ValidateSignatureOptions = {
  /**
   * The content of the signature header.
   */
  incomingSignatureHeader: string | null;
  /**
   * The payload that was signed.
   */
  payload?: Record<string, unknown>;
  /**
   * The secret of your webhook (`whsec_...`).
   */
  secret: string;
  /**
   * The number of seconds that the timestamp can differ from the current time before the request is rejected. Provide 0 to disable the check.
   */
  validForSeconds?: number;
};

type ValidateSignatureResult = { isValid: boolean; reason?: string };

function compareSignatures(signatureA: string, signatureB: string) {
  try {
    return crypto.timingSafeEqual(
      new Uint8Array(Buffer.from(signatureA)),
      new Uint8Array(Buffer.from(signatureB))
    );
  } catch (error) {
    return false;
  }
}

/**
 * Checks the signature validity and whether the timestamp is within the validForSeconds window.
 */
function validateSignature(
  options: ValidateSignatureOptions
): ValidateSignatureResult {
  const {
    incomingSignatureHeader,
    payload,
    secret,
    validForSeconds = 30,
  } = options;

  if (!incomingSignatureHeader) {
    return { isValid: false, reason: "Missing signature" };
  }

  const { success: isParsingSuccessful, data: parseSignatureHeaderData } =
    parseSignatureHeader(incomingSignatureHeader);
  if (!isParsingSuccessful) {
    return { isValid: false, reason: "Invalid signature header" };
  }

  const {
    timestamp: incomingSignatureTimestamp,
    signature: incomingSignature,
  } = parseSignatureHeaderData;

  const signature = createSignature({
    timestamp: incomingSignatureTimestamp,
    payload,
    secret,
  });
  let isSignatureValid = compareSignatures(signature, incomingSignature);
  if (!isSignatureValid) {
    return { isValid: false, reason: "Invalid signature" };
  }

  if (validForSeconds !== 0) {
    const differenceInSeconds = Math.abs(
      (Date.now() - incomingSignatureTimestamp) / MILLISECONDS_PER_SECOND
    );

    const isTimestampValid = differenceInSeconds <= validForSeconds;
    if (!isTimestampValid) {
      return { isValid: false, reason: "Invalid timestamp" };
    }
  }

  return { isValid: true };
}

type WebhookResponse = {
  metadata: {
    uuid: string;
  };
  data: {
    eventType: "post_updated" | "post_published" | "post_deleted";
    publication: {
      id: string;
    };
    post: {
      id: string;
    };
  };
};

export async function POST(req: Request) {
  const signature = req.headers.get("x-hashnode-signature");
  const payload: WebhookResponse = await req.json();
  const { isValid, reason } = validateSignature({
    incomingSignatureHeader: signature,
    payload,
    secret: process.env.HASHNODE_WEBHOOK_SECRET!,
  });

  if (!isValid)
    return new Response(reason, {
      status: 400,
    });

  // Handle revalidation
  switch (payload.data.eventType) {
    case "post_updated":
    case "post_deleted":
      revalidatePath("/(posts)/blogs/[slug]", "page");
    case "post_published":
      revalidatePath("/(overview)/blogs", "layout");
      revalidatePath("/blogs/feed.xml");
      revalidatePath("/sitemap.xml");
  }

  return new Response("OK", {
    status: 200,
    statusText: "OK",
  });
}
