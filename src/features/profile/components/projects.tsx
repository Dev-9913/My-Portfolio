import Image from "next/image";

import { CollapsibleList } from "@/components/collapsible-list";
import { Icons } from "@/components/icons";
import { PROJECTS } from "@/features/profile/data/projects";
import { Tag } from "@/components/ui/tag";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader className="flex items-center gap-2">
        <Icons.project className="size-5" />
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={PROJECTS.length}
        keyExtractor={(project) => project.id}
        renderItem={(project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 p-4 transition-colors hover:bg-zinc-950/2.5 dark:hover:bg-white/2.5"
          >
            {project.logo && (
              <Image
                src={project.logo}
                alt={project.title}
                width={40}
                height={40}
                unoptimized
                className="size-10 shrink-0 rounded-lg object-contain"
              />
            )}

            <div className="flex min-w-0 flex-col gap-1.5">
              <h3 className="text-base font-semibold">{project.title}</h3>

              {project.description && (
                <p className="text-sm whitespace-pre-line text-muted-foreground">
                  {project.description.replace(/^- /gm, "")}
                </p>
              )}

              {project.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              )}
            </div>
          </a>
        )}
      />
    </Panel>
  );
}
