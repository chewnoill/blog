import {
  Div,
  Flex,
  H2,
  H3,
  Link,
  P,
  Pre,
  Card,
  Quote,
  Text,
  Code,
  Label
} from "ui";

const Swatch = ({ bg, props }) => (
  <Div m={3}>
    <Div bg={bg} s={7} {...props} />
    {bg}
  </Div>
);

export default () => (
  <Flex fxd="column">
    <H2>Styleguide</H2>
    <Link href="#">link style</Link>
    <P>P tag</P>
    <Pre>Pre</Pre>
    <Card>Card</Card>
    <Quote>Quote</Quote>
    <Text>Text</Text>
    <Code>Code</Code>
    <Label>Label</Label>
    <H3>Colors</H3>
    <Flex flexWrap="wrap">
      <Swatch bg="black" />
      <Swatch bg="normal" />
      <Swatch bg="gray" />
      <Swatch bg="gray.0" />
      <Swatch bg="gray.1" />
      <Swatch bg="gray.2" />
      <Swatch bg="add" />
      <Swatch bg="del" />
      <Swatch bg="white" />
      <Swatch bg="bg" />
    </Flex>
  </Flex>
);
