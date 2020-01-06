import { H2, H3 } from "./base";
import { Text, Quote } from "./atoms";
import ByLine from "components/by-line";

export const mdxComponents = {
  ByLine,
  blockquote: Quote,
  p: Text,
  h2: H2,
  h3: H3,
};
