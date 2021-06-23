import React from 'react'
import { useSelector } from 'react-redux'
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
  setClient,
} from './redux/app/actions'
import {
  Overlay,
  PWAMenu,
  Feedback,
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
    const appSlice = useSelector(state => state.app)

    React.useEffect(() => {
        const { client } = appSlice
        if ( !client ) setClient ( )
    }, [ appSlice ])

    return <MuiThemeProvider theme={ createMuiTheme(theme) }>
              <CssBaseline />
              <Feedback />
              <Overlay />
              <div className={ clsx( classes.appWrap ) }>
                <PWAMenu />
                <SkipIntro />
              </div>
            </MuiThemeProvider> 
}
