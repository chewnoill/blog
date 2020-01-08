import styled from "@emotion/styled";
import { divSet } from "./prop-sets";

export const Div = styled.div(divSet);

export const Flex = styled(Div)({ display: "flex" });

export const Grid = styled(Div)({ display: "grid" });

export const Link = styled.a(divSet);

export const P = styled.p(divSet);

export const Pre = styled.pre(divSet);

export const H2 = styled.h2(
  {
    fontSize: "20px"
  },
  divSet
);

export const H3 = styled.h3(
  {
    fontSize: "15px"
  },
  divSet
);
