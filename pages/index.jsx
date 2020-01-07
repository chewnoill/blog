import GitHistory from "components/git-history";
import commits from "generated/commits.json";

const Index = () => <GitHistory commits={commits} />;

export default Index;
