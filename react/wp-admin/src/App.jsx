import React from 'react'
import {
  theme, 
} from './theme'
import {
  MuiThemeProvider, 
  createMuiTheme,
} from '@material-ui/core/'
import { 
  AppShell,
} from './components'


export default function App() {
     
    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <AppShell />
            </MuiThemeProvider> 
}
