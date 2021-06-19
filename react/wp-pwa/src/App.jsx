import React from 'react'
import clsx from 'clsx'
import {
  theme, 
} from './theme'
import {
  makeStyles, 
  MuiThemeProvider,  
  createMuiTheme, 
  CssBaseline,
} from '@material-ui/core/'
import {
  Overlay,
  PWAMenu,
} from './components'
import {
  SkipIntro,
} from './packages'

const useStyles = makeStyles((theme) => ({
  appWrap: {
    display: 'flex',
  },
}))

export default function App() {  

    const classes = useStyles()

    return <MuiThemeProvider theme={ createMuiTheme(theme) }>
              <CssBaseline />
              <Overlay />
              <div className={ clsx( classes.appWrap ) }>
                <PWAMenu />
                <SkipIntro />
              </div>
            </MuiThemeProvider> 
}
