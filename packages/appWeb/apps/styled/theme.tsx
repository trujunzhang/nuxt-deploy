import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// export brandPrimary =

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0b9eda'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: 'rgb(243, 243, 243)'
    }
  }
})
