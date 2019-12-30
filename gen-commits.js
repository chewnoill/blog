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
      return {
        ...JSON.parse(commit),
        summary: summary.trim(),
        body: body.trim(),
        patch: patch && parse(patch.trim())
      };
    });

  fs.writeFile("generated/commits.json", JSON.stringify(commits), () =>
    console.log("wrote commit history json")
  );
};

build();
