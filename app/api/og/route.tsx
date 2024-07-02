/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams, protocol, pathname, host, hostname } = new URL(req.url);

  console.log(host, hostname, protocol);

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
    <div tw="flex items-center justify-center w-full h-full relative">
      <img
        src={`${protocol}//${host}/assets/images/blogcover1.jpg`}
        tw="w-full h-full absolute inset-0"
        alt={"test"}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div tw="flex shadow-2xl shadow-black/40 absolute bg-white/90 p-[5rem] rounded-[5rem] h-[450px] w-[1050px] justify-center items-center text-center">
        <h1 tw="text-black font-light text-[36px] text-center flex flex-col items-center justify-center">
          Blogs tagged with
          <br />
          <span tw="text-[#17c964] text-[72px] font-medium">#Tagname</span>
        </h1>
      </div>
      <div
        tw="flex absolute w-[360px] h-[300px] top-0 left-0 "
        style={{
          filter: "drop-shadow(0px 20px 20px rgba(0, 0, 0))",
        }}
      >
        <div
          tw="flex w-[360px] h-[300px]"
          style={{
            padding: "5rem",
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            backgroundImage:
              "linear-gradient(to right, #17c964 0%, #45d483 100%)",
          }}
        ></div>
      </div>
      <div
        tw="flex absolute w-[360px] h-[300px] bottom-0 right-0"
        style={{
          filter: "drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.3))",
        }}
      >
        <div
          tw="flex absolute w-[360px] h-[300px]"
          style={{
            padding: "5rem",
            clipPath: "polygon(100% 0, 120% 100%, 0 100%)",
            backgroundImage:
              "linear-gradient(to right, #17c964 0%, #45d483 100%)",
          }}
        ></div>
      </div>
    </div>
  );

  return new ImageResponse(imageJsx, {
    width: 1200,
    height: 600,
    status: 200,
    statusText: "OK",
  });
}
