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
import {
    initLocalify,
} from './packages/Localify/actions'

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
    }, [ localifySlice ]) 
    React.useEffect(() => {
        const { client } = appSlice
        if ( !client ) setClient ( )
    }, [ appSlice ])

    const { error } = appSlice

    return <MuiThemeProvider theme={ createMuiTheme(theme) }>
              <CssBaseline />
              <Feedback />
              <Overlay />
              <div className={ clsx( classes.appWrap ) }>
                { error ? <React.Fragment>ERROR</React.Fragment> : 
                  <React.Fragment>
                    <PWAMenu />
                    <SkipIntro />
                  </React.Fragment>
                }
              </div>
            </MuiThemeProvider> 
}
