import { H2, H3 } from "./base";
import { Text, Quote, InlineCode } from "./atoms";
import ByLine from "components/by-line";
import { H1ref } from "components/svg-path";

export const mdxComponents = {
  ByLine,
  blockquote: Quote,
  p: Text,
  h1: H1ref,
  h2: H2,
  inlineCode: InlineCode,
  h3: H3
};
