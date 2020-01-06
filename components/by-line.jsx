import { P, Flex } from "ui";
import { ChewNoIll } from "i-am-chewnoill";

const ByLine = () => (
  <Flex ai="center">
    <P pr={3} pt="3px">
      by
    </P>
    <ChewNoIll delay={10} />
  </Flex>
);

export default ByLine;
