import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    useTheme,
    Dialog,
    Typography,
} from '@material-ui/core/'
import { 
    Blokey,
} from'./'

const useStyles = makeStyles(( theme ) => ({
  layout: {
  },
  isMobile:{
    margin: theme.spacing( 10 ) 
  }  
}))

export default function Layout() {
  
  const classes = useStyles()
  const theme = useTheme()
  const appSlice = useSelector(state => state.app)
  const layoutSlice = useSelector(state => state.layout)
  const {
    isMobile,
  } = appSlice


  React.useEffect(() => {
        const { 
            initted,
            reset,
        } = layoutSlice        
        if ( !initted ){ 
            // animate(`init`, `#listingslab`, () => {
            //     // console.log ('DAMN.')
            // })
            // initAnimation( true )
            console.log ('initted', initted)
        }
        if (reset) {
            // animate( `reset`, `#listingslab` )
            // resetAnimation ( false )
        }
    }, [ layoutSlice ])

  return <Dialog 
           className={ clsx( classes.layout) } 
           open
           fullScreen
           onClose={ (e) => {
             e.preventDefault()
             console.log ( 'close dialog')
           }}
         >
         <div className={ clsx( classes.isMobile ) }>
           { `isMobile ${isMobile.toString() }` }
         </div>

         <div id={`logo`}
              style={{
                  height: 65,
                  width: 350,
                  position: 'absolute',
                  zIndex: 80,
              }}>
                  <Typography variant={ `h4` } style={{
                              width: 301,
                              left: 49,
                              fontWeight: 'lighter',
                              height: 59,
                              position: 'absolute',
                              zIndex: 60,
                          }}>
                      @listingslab
                  </Typography>

                  <Blokey id={`blokey`} 
                          color= { theme.palette.secondary.main }
                          style={{
                              left: 0,
                              width: 40,
                              height: 40,
                              position: 'absolute',
                              zIndex: 50,
                          }} />
                  
          </div>

        </Dialog>
}
