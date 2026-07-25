import dayjs from "dayjs";
import Image from "next/image";

import { CollapsibleList } from "@/components/collapsible-list";
import { Icons } from "@/components/icons";
import { CERTIFICATIONS } from "@/features/profile/data/certifications";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Certifications() {
  return (
    <Panel id="certs">
      <PanelHeader className="flex items-center gap-2">
        <Icons.certificate className="size-5" />
        <PanelTitle>Certifications</PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        keyExtractor={(cert) => `${cert.title}-${cert.issueDate}`}
        renderItem={(cert) => {
          const content = (
            <div className="flex items-center gap-3 p-4">
              {cert.issuerLogoURL && (
                <Image
                  src={cert.issuerLogoURL}
                  alt={cert.issuer}
                  width={36}
                  height={36}
                  unoptimized
                  className="size-9 shrink-0 rounded-md object-contain"
                />
              )}

              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium">
                  {cert.title}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {cert.issuer}
                  {dayjs(cert.issueDate).isValid() &&
                    ` \u00B7 ${dayjs(cert.issueDate).format("MMM YYYY")}`}
                </span>
              </div>
            </div>
          );

          return cert.credentialURL ? (
            <a
              href={cert.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:bg-zinc-950/2.5 dark:hover:bg-white/2.5"
            >
              {content}
            </a>
          ) : (
            content
          );
        }}
      />
    </Panel>
  );
}
