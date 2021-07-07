import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Dialog,
} from '@material-ui/core/'
import { 
    Branding,
    TimeMachine,
    Localify,
} from'./'
import {
  setClient,
  togglePwaOpen,
} from '../redux/app/actions'
import {
  animationInitted,
  animationRestart,
} from '../redux/layout/actions'
import {
  animateLayout,
} from './'


const useStyles = makeStyles(( theme ) => ({
  layout: {
  },
  isMobile:{
    margin: theme.spacing( 10 ) 
  }  
}))

export default function Layout() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const layoutSlice = useSelector(state => state.layout)
  const { pwaOpen } = appSlice

  React.useEffect(() => {
    const { pwaOpen } = appSlice

    if (pwaOpen){
      const { 
        initted,
        restartAnimation,
      } = layoutSlice     
      if ( !initted || restartAnimation ){ 
          animateLayout(
            `setup`, 
            `#layout`,  
            { 
               brandingW: 240, 
               brandingH: 55,
               timeMachineW: 254,
               timeMachineH: 326,
            },
            3,
            () => {
              // console.log ('Finished Time out()')
            },
          )
          animationInitted( true )
          animationRestart( false )
      }
    }
    
  }, [ layoutSlice, appSlice ])

  React.useEffect(() => {
      const { 
          client,
      } = appSlice
      if (!client) setClient ()        
  }, [ appSlice ])
  
  return <Dialog 
           className={ clsx( classes.layout) } 
           open={ pwaOpen }
           fullScreen
           onClose={ (e) => {
             e.preventDefault()
             togglePwaOpen( false )
           }}>
           <div id={ `layout` }>
             <Branding />
             <TimeMachine />
             <Localify />
           </div>
        </Dialog>
}
