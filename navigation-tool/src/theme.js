import BrandonTextReg from './fonts/brandonReg.ttf';
import { createTheme } from '@material-ui/core/styles';

const brandonTextReg = {
    fontFamily: 'brandonTextReg',
    fontStyle: 'regular',
    fontDisplay: 'swap',
    fontWeight: '400',
    src: `
      local('BrandonTextReg'),
      
      url(${BrandonTextReg}) format('truetype')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
   };
  
  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#3EB49C',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#e83946',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 0,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: ['"Open Sans"', 'BrandonTextReg', 'Roboto'].join(','),
     },
     overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [brandonTextReg],
        },
      }
    }
  });

  export default theme;