const execa = require("execa");
const fs = require("fs");
const uuid = require("uuid/v1");
const parse = require("parse-diff");

const start = uuid();
const inner = uuid();

const format = `${start}{
  "commit": "%H",
  "abbreviated_commit": "%h",
  "tree": "%T",
  "abbreviated_tree": "%t",
  "parent": "%P",
  "abbreviated_parent": "%p",
  "refs": "%D",
  "encoding": "%e",
  "author": {
    "name": "%aN",
    "email": "%aE",
    "date": "%aD"
  },
  "commiter": {
    "name": "%cN",
    "email": "%cE",
    "date": "%cD"
  }
}${inner}%s${inner}%b${inner}`;

const build = async () => {
  const { stdout } = await execa("git", [
    "log",
    "-p",
    "-U3",
    `--pretty=format:${format}`,
    "--",
    ".",
    ":!yarn.lock"
  ]);
  const commits = stdout
    .split(start)
    .filter(str => !!str)
    .reverse()
    .map(str => {
      const [commit, summary, body, patch] = str.split(inner);
      const commitData = JSON.parse(commit);
      const filename = `generated/${commitData.abbreviated_commit}.mdx`;

      body &&
        fs.writeFile(filename, body, () => console.log(`wrote ${filename}`));

      return {
        ...commitData,
        summary: summary.trim(),
        body: body.trim(),
        patch: patch && parse(patch.trim())
      };
    });

  fs.writeFile(
    "generated/index.js",
    commits
      .filter(c => !!c.body)
      .map(
        ({ abbreviated_commit: c }, i) =>
          `import commit${c} from './${c}.mdx'\nexport const c${c} = commit${c}`
      )
      .join("\n"),
    () => {
      console.log("writing generated/index.js");
    }
  );

  fs.writeFile("generated/commits.json", JSON.stringify(commits), () =>
    console.log("wrote commit history json")
  );
};

build();
