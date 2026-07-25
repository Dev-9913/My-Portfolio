import { BriefcaseBusinessIcon } from "lucide-react";

import { WorkExperience } from "@/registry/work-experience";
import type { ExperienceItemType } from "@/registry/work-experience";
import { EXPERIENCES } from "@/features/profile/data/experiences";
import type { Experience } from "@/features/profile/types/experiences";

import { Panel, PanelHeader, PanelTitle } from "./panel";

function formatPeriod(period: { start: string; end?: string }) {
  return period.end ? `${period.start} — ${period.end}` : `${period.start} — Present`;
}

function toWorkExperienceItem(experience: Experience): ExperienceItemType {
  return {
    id: experience.id,
    companyName: experience.companyName,
    companyLogo: experience.companyLogo,
    isCurrentEmployer: experience.isCurrentEmployer,
    positions: experience.positions.map((position) => ({
      id: position.id,
      title: position.title,
      employmentPeriod: formatPeriod(position.employmentPeriod),
      employmentType: position.employmentType,
      description: position.description,
      icon: position.icon === "idea" ? "code" : position.icon,
      skills: position.skills,
      isExpanded: position.isExpanded,
    })),
  };
}

export function Experiences() {
  const experiences = EXPERIENCES.map(toWorkExperienceItem);

  return (
    <Panel id="experience">
      <PanelHeader className="flex items-center gap-2">
        <BriefcaseBusinessIcon className="size-5" />
        <PanelTitle>Experience</PanelTitle>
      </PanelHeader>

      <WorkExperience experiences={experiences} />
    </Panel>
  );
}
