import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title");

  const robotoCondensedMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/RobotoCondensed-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div tw="w-full h-full flex items-center justify-center text-white bg-black p-16">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <div tw="absolute flex bottom-16 right-16">
          <svg
            width={160}
            height={80}
            viewBox="0 0 512 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h96v64H0V0ZM96 0h64v64H96V0ZM160 64h64v128h-64V64ZM96 192h64v64H96v-64ZM0 192h96v64H0v-64ZM0 0h64v256H0V0Z"
              fill="currentColor"
            />
            <path
              d="M320 0h64v256h-64V0ZM448 0h64v64l-64 32V0ZM448 160l64 32v64h-64v-96ZM384 96h96v64h-96V96Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <h1
          tw="text-center font-medium"
          style={{
            fontFamily: "RobotoCondensed",
            fontSize: 64,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "RobotoCondensed",
          data: robotoCondensedMedium,
          weight: 500,
        },
      ],
    }
  );
}

