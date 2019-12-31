const withCSS = require("@zeit/next-css");
const emoji = require("remark-emoji");
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [emoji]
  }
});

module.exports = withMDX(withCSS({}));
