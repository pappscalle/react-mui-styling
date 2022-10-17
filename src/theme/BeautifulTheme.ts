import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    grid: {
      main: string
      dark: string
    }
  }

  interface PaletteOptions {
    grid?: {
      main: string
      dark: string
    }
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    beautiful: true
  }
}

const BeautifulTheme = createTheme({
  palette: {
    primary: {
      main: '#12842c',
      light: '#3aab58',
      dark: 'sienna',
    },
    grid: {
      main: 'rgb(0,0,0,0.1)',
      dark: 'rgb(0,0,0,0.2',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid orange',
        },
      },
      variants: [
        {
          props: {
            variant: 'beautiful',
          },
          style: {
            fontStyle: 'italic',
            border: '4x solid lightpink',
            color: 'fuchsia',
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

export default BeautifulTheme
