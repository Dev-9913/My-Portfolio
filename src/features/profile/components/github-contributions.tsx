import { GITHUB_USERNAME } from "@/config/site";
import { getGitHubContributions } from "@/features/profile/data/github-contributions";

import { GitHubContributionsGraph } from "./github-contributions-graph";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export async function GitHubContributions() {
  const contributions = await getGitHubContributions();

  return (
    <Panel id="github">
      <PanelHeader className="flex items-center justify-between">
        <PanelTitle>GitHub Contributions</PanelTitle>
        <a
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{GITHUB_USERNAME}
        </a>
      </PanelHeader>

      <PanelContent className="overflow-x-auto">
        <GitHubContributionsGraph contributions={contributions} />
      </PanelContent>
    </Panel>
  );
}
