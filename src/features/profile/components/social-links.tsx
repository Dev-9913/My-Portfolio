import Image from "next/image";

import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { cn } from "@/lib/utils";

import { Panel } from "./panel";

export function SocialLinks() {
  return (
    <Panel id="social-links">
      <ul className="grid grid-cols-2 sm:grid-cols-4">
        {SOCIAL_LINKS.map((link, index) => (
          <li
            key={link.href}
            className={cn(
              "border-b border-edge",
              index % 2 === 0 ? "border-r" : "",
              "sm:border-r sm:last:border-r-0"
            )}
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 transition-colors hover:bg-zinc-950/2.5 dark:hover:bg-white/2.5"
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg",
                  link.padding && "p-1"
                )}
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={32}
                  height={32}
                  unoptimized
                  className="size-full object-contain"
                />
              </span>

              <span className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium">
                  {link.title}
                </span>
                {link.description && (
                  <span className="truncate text-xs text-muted-foreground">
                    {link.description}
                  </span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
