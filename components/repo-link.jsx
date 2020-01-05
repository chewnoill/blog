import { Div, Link } from "ui";

const RepoLink = ({ commit, children }) => (
  <Div>
    <Link href={`${process.env.REPO_URL}/${commit}`}>{children}</Link>
  </Div>
);

export default RepoLink;
