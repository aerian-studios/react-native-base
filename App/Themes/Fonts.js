const type = {
  base: 'HelveticaNeue',
  light: 'HelveticaNeue-Light',
  bold: 'HelveticaNeue-Bold',
  medium: 'HelveticaNeue-Medium'
};

const size = {
  h1: 26,
  h2: 24,
  h3: 18,
  input: 18,
  regular: 18,
  medium: 15,
  small: 14,
  tiny: 10,
  alt: 17,
  sub: 13
};

const weight = {
    h2: '300'
};

const lineHeights = {
  h1: 30,
  h2: 35,
  h3: 22,
  regular: 27,
  medium: 19,
  list: 30,
  tiny: 18,
  small: 17,
  sub: 17,
  alt: 15
};

const style = {
  h1: {
    fontFamily: type.base,
    fontWeight: "300",
    fontSize: size.h1
  },
  h2: {
    fontFamily: type.light,
    fontWeight: weight.h2,
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.bold,
    fontWeight: "500",
    fontSize: size.h3,
    lineHeight: lineHeights.h3
  },
  appFurniture: {
    fontFamily: type.base,
    fontWeight: "300",
    fontSize: size.alt
  },
  normal: {
    fontFamily: type.base,
    fontWeight: "300",
    fontSize: size.regular
  },
  heroTitle: {
    fontFamily: type.bold,
    fontWeight: "bold",
    fontSize: size.h1,
    // equivalent of bottom margin
    borderBottomWidth: 6,
    borderColor: 'rgba(0, 0, 0, 0)'
  },
  heroContent: {
    fontFamily: type.light,
    fontWeight: "300",
    fontSize: size.medium,
    lineHeight: lineHeights.medium
  },
  caption: {
    fontFamily: type.light,
    fontWeight: "100",
    fontSize: size.medium
  },
  small: {
    fontFamily: type.medium,
    fontWeight: "200",
    fontSize: size.small
  },
  tiny: {
    fontFamily: type.regular,
    fontWeight: "300",
    fontSize: size.tiny
  },
  textSub: {
    fontFamily: type.regular,
    fontWeight: "400",
    fontSize: size.sub
  }
};

export default {
  type,
  size,
  style,
  weight,
  lineHeights
};
