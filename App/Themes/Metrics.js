import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const baseMargin = 10;

const screenW = width < height ? width : height;
const screenH = width < height ? height : width;

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: baseMargin, // horizontal rhythm
  marginVertical: baseMargin, // vertical rhthym
  section: 25,
  baseMargin: baseMargin,
  doubleBaseMargin: baseMargin * 2,
  smallMargin: baseMargin * 0.5,
  horizontalLineHeight: 1,
  screenWidth: screenW,
  screenHeight: screenH,
  navBarHeight: 44,
  buttonRadius: 5,
  cardRadius: 2,
  icons: {
    tiny: 18,
    small: 21,
    medium: 24,
    large: 45,
    xl: 63
  },
  images: {
    fullWW: screenW,
    fullWH: screenW * 0.5625,
    heroH: screenW * 1.066,
    cardW: (screenW / 2) - (baseMargin + 2),
    cardH: ((screenW / 2) - (baseMargin + 2)) * 0.5625,
    logo: 63
  }
}

// const stlyesLIst = {
//   navbar: {
//     status: 'overlay, 20',
//     background: 'rgb(aeiranPink)',
//     height: 44,
//     color: '${textLight}'
//     icons: '21 x n',
//     logo: '26 x 27',
//     text: '${text:alt}, line 22, regular, white, back: 19 x 28',
//     justify: 'space-around'
//   },
//   quickNav: {
//     inherit: 'navbar',
//     height: 49,
//     icons: '24 x 24',
//     iconTxt: 10, 'line 12'
//   }
//   main: {
//     hero: {
//       image: '375 x 400',
//       txtBg: 'rgba(blackish, shadeMid)'
//     }
//     heroTitle: {
//       size: ${h1},
//       align: 'center'
//       color: '${textLight}',
//       family: 'helvetica neue',
//       style: 'bold'
//     },
//     heroDesc: {
//       size: 15,
//       align: 'center',
//       style: 'light',
//       color: '${textLight}'
//     },
//     categoryTitle: {
//       info: "${h3} ${text} line-height: 27, left",
      
//     },
//     seeAll: {
//       info: '${text:small}, medium, ${aeiranPink}, ${line:small}, floated right'
//     },
//     card: {
//       info: '173 x 187, box-shadow: 2 0 0 4 rgba(blackish, shadeStrong)',
//       img: '16:9',
//       content: 'padding: 9; title: 18, line 22, medium, ${text}, left; sub: 12, line ${text:alt}, regular, ${textSub}, left'
//     }
//   },
//   categoryHome: {
//     promotedCard: {
//       inherit: 'card',
//       width: 'full',
//       minHeight: '286'
//     }
//   },
//   article: {
//     img: '16:9',
//     h1: '${h1}/30, bold, ${text}',
//     caption: '15/19, light, ${textSub}',
//     content: {
//       info: 'top and bottom divider - 1px ${divider}',
//       para: '18/27, light, ${text}',
//       link: '18, medium, ${aerianPink}',
//       h2: '24/35, light, ${text}',
//       list: '18/30 light, bullet: disc ${aerianPink}'
//     }
//   },
//   menu: {
//     logo: '63 x 63, margin 29 19',
//     width: '80%',
//     background: 111,
//     color: 'white',
//     size: ${text:alt},
//     highlight: '191919, padding 14 19'
//   }
// }

export default metrics
