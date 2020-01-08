import styled from "@emotion/styled";
import { Flex, Div, P, Pre, H3 } from "./base";
import { divSet } from "./prop-sets";

export const Page = styled(props => (
  <Flex w={1} fxd="column" alignItems="center">
    <Flex fxd="column" maxWidth="700px" textStyle="main" {...props} />
  </Flex>
))(divSet);

export const Card = styled(props => (
  <Flex
    fxd="column"
    m="1"
    mt="5"
    p="3"
    bg="white"
    borderStyle="card"
    {...props}
  />
))(divSet);

export const Quote = styled(props => (
  <Div
    marginLeft="4"
    paddingLeft="4"
    borderStyle="quote"
    textStyle="quote"
    {...props}
  />
))(divSet);

export const Text = styled(props => <P p="2" {...props} />)(divSet);

export const Code = styled(props => (
  <Pre textStyle="code" margin={0} {...props} />
))(divSet);

export const Label = styled(props => <H3 ff="mono" {...props} />)(divSet);
