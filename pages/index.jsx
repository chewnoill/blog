import GitHistory from "components/git-history";
import { Div } from "ui";
import { SvgLine, RefProvider } from "components/svg-path";
import commits from "generated/commits.json";

const Index = () => (
  <Div>
    <RefProvider>
      <SvgLine height={500} width={500} />
      <GitHistory commits={commits} />
    </RefProvider>
  </Div>
);

export default Index;
