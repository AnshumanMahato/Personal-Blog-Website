import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const tag = searchParams.get("tag");
  const series = searchParams.get("series");

  if (!tag && !series) {
    return new Response("Please provide a tag or series", {
      status: 400,
    });
  }

  if (tag && series) {
    return new Response("Cannot filter by both tag and series", {
      status: 400,
    });
  }

  let title: string;
  if (tag) title = `Blogs tagged #${tag}`;
  else title = `Blogs in series ${series}`;

  const imageJsx = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#1f2937",
      }}
    >
      <h1 style={{ color: "white", fontSize: "3rem" }}>{title}</h1>
    </div>
  );

  return new ImageResponse(imageJsx, {
    width: 1200,
    height: 600,
    status: 200,
    statusText: "OK",
  });
}
