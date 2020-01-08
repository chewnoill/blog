export const theme = {
  colors: {
    black: "#121212",
    gray: ["#121212", "dimgray", "gainsboro"],
    add: "limegreen",
    del: "tomato",
    normal: "#121212",
    white: "whitesmoke",
    bg: "white"
  },
  fontSizes: [
    { alias: "sm", value: 12 },
    { alias: "md", value: 16 },
    { alias: "lg", value: 24 }
  ],
  textStyles: {
    main: {
      color: "black",
      fontSize: "md"
    },
    quote: {
      color: "gray.1",
      fontSize: "md",
      fontFamily: "mono"
    },
    code: {
      fontFamily: "mono",
      fontSize: "sm",
      whiteSpace: "pre-wrap"
    }
  },
  borders: {
    solid: "2px solid"
  },
  borderStyles: {
    card: {
      border: "2px solid",
      borderColor: "gray.2",
      borderRadius: "3"
    },
    quote: {
      borderLeft: "2px solid",
      borderColor: "gray.2"
    }
  }
};
