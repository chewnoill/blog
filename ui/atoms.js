import styled from "@emotion/styled";
import { Flex } from "./base";
import { divSet } from "./prop-sets";

export const Page = styled(props => (
  <Flex w={1} fxd="column" alignItems="center">
    <Flex fxd="column" maxWidth="700px" textStyle="main" {...props} />
  </Flex>
))(divSet);
