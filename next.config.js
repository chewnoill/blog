const withCSS = require("@zeit/next-css");
const emoji = require("remark-emoji");
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [emoji]
  }
});
require("dotenv").config();

module.exports = withMDX(
  withCSS({
    env: {
      REPO_URL: process.env.REPO_URL
    }
  })
);
