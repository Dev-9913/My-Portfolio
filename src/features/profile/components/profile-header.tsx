import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[0.5px] my-[3px]">
          {}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm from India">
          {/* Flag of India */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 -left-px h-8 sm:h-9"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 513 357.071"
          >
            <rect width="513" height="119.024" fill="#FF9933" />
            <rect y="119.024" width="513" height="119.024" fill="#fff" />
            <rect y="238.048" width="513" height="119.023" fill="#138808" />
            <circle
              cx="256.5"
              cy="178.536"
              r="35"
              fill="none"
              stroke="#000080"
              strokeWidth="3"
            />
            <circle cx="256.5" cy="178.536" r="3" fill="#000080" />
            <g stroke="#000080" strokeWidth="1.2">
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                const rad = (angle * Math.PI) / 180;
                const x2 = 256.5 + 35 * Math.cos(rad);
                const y2 = 178.536 + 35 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1="256.5"
                    y1="178.536"
                    x2={x2}
                    y2={y2}
                  />
                );
              })}
            </g>

            <rect
              fill="none"
              stroke="#CCC"
              strokeWidth=".64"
              strokeMiterlimit="22.926"
              x=".32"
              y=".319"
              width="512.359"
              height="356.43"
            />
          </svg>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}

