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
  // PWAMenu,
  Feedback,
  SystemError,
} from './components'
import {
    initLocalify,
} from './redux/localify/actions'
import {
  Layout,
  Terminal,
} from './theme'

const useStyles = makeStyles((theme) => ({
  appWrap: {
    display: 'flex',
  },
}))

export default function App() {  

    const classes = useStyles() 
    const appSlice = useSelector(state => state.app)
    const localifySlice = useSelector(state => state.localify) 

    React.useEffect(() => {
        const {
            initted,
            initting,
        } = localifySlice
        if (!initted && !initting) initLocalify()
        // console.log ( 'localifySlice', localifySlice )
    }, [ localifySlice ]) 
    
    React.useEffect(() => {
        const { client } = appSlice
        if ( !client ) setClient ()
    }, [ appSlice ])

    const { 
      error,
      terminalOpen,
    } = appSlice



    return <MuiThemeProvider theme={ createMuiTheme(theme) }>
              <CssBaseline />
              <Feedback />
              <Overlay />
              <div className={ clsx( classes.appWrap ) }>
                { error ? <SystemError /> : null }
                { terminalOpen ? <Terminal /> : <Layout /> }
              </div>
            </MuiThemeProvider> 
}



/*
  <PWAMenu />
*/