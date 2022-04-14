import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shape: {
        borderRadius: 10,
      },
      shadows: shadows(mode),
      typography: {
        // fontFamily: '"Poppins", sans-serif',
        fontFamily: '"CustomFontBook", sans-serif',
        fontDisplay: 'swap',
        // h1: {
        //   // fontWeight: 600,
        //   // fontSize: "3.5rem",
        //   fontWeight: 600,
        //   fontSize: '2rem',
        // },
        // h2: {
        //   // fontWeight: 600,
        //   // fontSize: "3rem",
        //   fontWeight: 600,
        //   fontSize: '1.25rem',
        // },
        // h3: {
        //   fontWeight: 600,
        //   fontSize: '2.25rem',
        // },
        // h4: {
        //   fontWeight: 600,
        //   fontSize: '2rem',
        // },
        // h5: {
        //   fontWeight: 600,
        //   fontSize: '1.5rem',
        // },
        // h6: {
        //   fontWeight: 600,
        //   fontSize: '1.25rem',
        // },
        // overline: {
        //   fontWeight: 600,
        // },
        // body2: {
        //   lineHeight: 1.7,
        // },
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 600,
              borderRadius: 10,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              // borderRadius: 10,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              // borderRadius: 10,
            },
            input: {
              // borderRadius: 10,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              // borderRadius: 10,
            },
          },
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              // borderRadius: 10,
              // backgroundColor: 'red',
              padding: 8,
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              // borderRadius: 10,
              // backgroundColor: 'red',
              borderBottom: '1px solid #eaeaea',
            },
          },
        },
        // MuiCssBaseline: {
        //   styleOverrides: {
        //     '#nprogress': {
        //       pointerEvents: 'none',
        //     },
        //     '#nprogress .bar': {
        //       backgroundColor: '#7900ff3b',
        //       height: 3,
        //       left: 0,
        //       position: 'fixed',
        //       top: 0,
        //       width: '100%',
        //       zIndex: 2000,
        //     },
        //   },
        // },
      },
      themeToggler,
    }),
  );

export default getTheme;
