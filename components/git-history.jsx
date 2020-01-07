import GitDiff from "./git-diff";
import { Grid, Label } from "ui";

const GitHistory = ({ commits }) => (
  <Grid gridTemplateColumns="min-content minmax(0,auto)" gridRowGap={6} m={3}>
    {commits.map(commit => (
      <GitCommit key={commit.commit} {...commit} />
    ))}
  </Grid>
);

const GitCommit = ({ abbreviated_commit, summary, body, patch }) => (
  <>
    <Label pr={3}>{abbreviated_commit}</Label>
    <div>
      <Label>{summary}</Label>
      {body}
      <GitDiff patchs={patch} />
    </div>
  </>
);

export default GitHistory;
