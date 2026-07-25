import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const domain = searchParams.get("domain");
  const isForSale = searchParams.get("sale") === "true";

  const magistralMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/Magistral-Medium.ttf")
  );

  const robotoMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/Roboto-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div tw="flex text-black bg-white w-full h-full p-16">
        <div tw="flex-1 flex flex-col justify-center border-l border-r border-zinc-200">
          <div tw="flex justify-center border-t border-b border-zinc-200">
            <h1
              tw="mt-8 mb-4 ml-8 mr-8 font-medium"
              style={{
                fontFamily: "Magistral",
                fontSize: 88,
              }}
            >
              {domain}
            </h1>
          </div>

          <div tw="flex justify-center border-b border-zinc-200">
            <p
              tw="mt-0 mb-0 pt-4 pb-4 pl-8 pr-8 font-medium"
              style={{
                fontFamily: "Roboto",
                fontSize: 32,
                color: isForSale ? "#22c55e" : "#71717a",
              }}
            >
              {isForSale
                ? "The domain name is for sale"
                : "The website will be launched soon"}
            </p>
          </div>
        </div>

        <div tw="absolute flex inset-y-0 w-px bg-zinc-200 left-16" />
        <div tw="absolute flex inset-y-0 w-px bg-zinc-200 right-16" />
        <div tw="absolute flex inset-x-0 h-px bg-zinc-200 top-16" />
        <div tw="absolute flex inset-x-0 h-px bg-zinc-200 bottom-16" />

        <div tw="absolute flex bottom-16 right-16">
          <svg
            width={160}
            height={80}
            viewBox="0 0 640 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h120v80H0V0ZM120 0h80v80H120V0ZM200 80h80v160h-80V80ZM120 240h80v80H120v-80ZM0 240h120v80H0v-80ZM0 0h80v320H0V0Z"
              fill="currentColor"
            />
            <path
              d="M400 0h80v320h-80V0ZM560 0h80v80l-80 40V0ZM560 200l80 40v80h-80v-120ZM480 120h120v80h-120v-80Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Magistral",
          data: magistralMedium,
          weight: 500,
        },
        {
          name: "Roboto",
          data: robotoMedium,
          weight: 500,
        },
      ],
    }
  );
}

