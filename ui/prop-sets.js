import {
  borderSet,
  colorSet,
  compose,
  displaySet,
  flexSet,
  globalSet,
  gridSet,
  layoutSet,
  positionSet,
  style,
  textSet,
  transformSet,
  variant,
  verticalAlign
} from "onno";

const textStyle = variant({
  propsKeys: ["textStyle"],
  themeKeys: ["textStyles"],
  renderers: [colorSet, textSet]
});

const borderStyle = variant({
  propsKeys: ["borderStyle"],
  themeKeys: ["borderStyles"],
  renderers: [borderSet]
});

export const divSet = compose({
  name: "div-props",
  renderers: [
    borderSet,
    borderStyle,
    displaySet,
    flexSet,
    globalSet,
    gridSet,
    layoutSet,
    positionSet,
    textSet,
    textStyle,
    transformSet,
    verticalAlign
  ]
});
