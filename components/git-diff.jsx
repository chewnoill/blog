import { Grid, Code, Card, Label } from "ui";

const GitDiff = ({ patchs, ...props }) => (
  <>
    {patchs.map((patch, i) => (
      <GitChunks key={i} {...patch} />
    ))}
  </>
);

const GitChunks = ({ chunks, from, to }) => (
  <Card>
    <Label
      als="center"
      p="3"
      fontSize="md"
      marginTop="-20px"
      bg="gray.2"
      borderStyle="card"
      textStyle="main"
    >
      {to}
    </Label>
    {chunks.map((chunk, i) => (
      <GitChanges key={i} {...chunk} />
    ))}
  </Card>
);

const GitChanges = ({ changes }) => (
  <Grid gridTemplateColumns="min-content min-content auto" p={3}>
    {changes.map((change, i) => (
      <GitChange key={i} {...change} />
    ))}
  </Grid>
);

const GitChange = ({ type, ln, ln1, ln2, content }) => (
  <>
    <Code color={type} pr={3}>
      {type === "normal" ? ln1 : type === "del" && ln}
    </Code>
    <Code color={type} pr={3}>
      {type === "normal" ? ln2 : type === "add" && ln}
    </Code>
    <Code color={type} textStyle="code">
      {content}
    </Code>
  </>
);

export default GitDiff;
