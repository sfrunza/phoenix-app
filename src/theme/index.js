import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light, dark } from './palette';
import { alpha } from '@mui/material/styles';

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      shape: {
        borderRadius: 10,
      },
      shadows: shadows(mode),
      typography: {
        fontFamily: '"CustomFontBook", sans-serif',
        fontDisplay: 'swap',
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
              // borderRadius: 18,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              '&.Mui-focused': {
                boxShadow: `${alpha(light.primary.main, 0.15)} 0 0 0 2px`,
                borderColor: light.primary.main,
              },
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 12,
            },
            input: {
              borderRadius: 12,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
            },
          },
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              padding: 8,
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              borderBottom: '1px solid #eaeaea',
            },
          },
        },
      },
      themeToggler,
    }),
  );

export default getTheme;
