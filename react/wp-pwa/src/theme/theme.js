/*
  Tealy #bbc9dd
  Bluey #c3dde6
  Whitey #e4e8f0
  Purpley #421c5d
  Orangey #e05717
  Greeny #ccd31f
*/

const settings = {
  primaryColor: `#421c5d`,
  secondaryColor: `#ccd31f`,
}

const {
  primaryColor,
  secondaryColor,
} = settings

export const theme = { 
  palette: {
    type: 'light',
    background: {
      default: `#fff`,
      paper: `#fff`,
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: secondaryColor,
    },
    success: {
      main: primaryColor,
    },
  }
}
