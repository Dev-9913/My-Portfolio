import dayjs from "dayjs";

import { CollapsibleList } from "@/components/collapsible-list";
import { Icons } from "@/components/icons";
import { AWARDS } from "@/features/profile/data/awards";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Awards() {
  return (
    <Panel id="awards">
      <PanelHeader className="flex items-center gap-2">
        <Icons.award className="size-5" />
        <PanelTitle>Honors & Awards</PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={AWARDS}
        keyExtractor={(award) => award.id}
        renderItem={(award) => (
          <div className="flex flex-col gap-1 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold">{award.title}</h3>
              <span className="text-xs text-muted-foreground">
                {dayjs(award.date).isValid()
                  ? dayjs(award.date).format("MMM YYYY")
                  : award.date}
              </span>
            </div>

            <div className="text-sm text-muted-foreground">
              {award.prize} &middot; {award.grade}
            </div>

            {award.description && (
              <div className="mt-1 text-sm whitespace-pre-line text-muted-foreground">
                {award.description.replace(/^- /gm, "")}
              </div>
            )}

            {award.referenceLink && (
              <a
                href={award.referenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link mt-1 w-fit text-sm"
              >
                View reference
              </a>
            )}
          </div>
        )}
      />
    </Panel>
  );
}
