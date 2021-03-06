import GitDiff from "./git-diff";
import { Grid, Label, mdxComponents } from "ui";
import * as Bodies from "../generated";
import { MDXProvider } from "@mdx-js/react";
import RepoLink from "./repo-link";

const GitHistory = ({ commits }) => (
  <Grid gridTemplateColumns="min-content minmax(0,auto)" gridRowGap={6} m={3}>
    {commits.map(commit => (
      <GitCommit key={commit.commit} {...commit} />
    ))}
  </Grid>
);

const GitCommit = ({ abbreviated_commit, summary, body, patch }) => {
  const Body = Bodies[`c${abbreviated_commit}`];
  return (
    <MDXProvider components={mdxComponents}>
      <RepoLink commit={abbreviated_commit}>
        <Label pr={3}>{abbreviated_commit}</Label>
      </RepoLink>
      <div>
        <Label>{summary}</Label>
        {Body && <Body />}
        <GitDiff patchs={patch} />
      </div>
    </MDXProvider>
  );
};

export default GitHistory;
