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
} from'./'
import {
  setClient,
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

  React.useEffect(() => {
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
  }, [ layoutSlice ])

  React.useEffect(() => {
      const { 
          client,
      } = appSlice
      if (!client) setClient ()        
  }, [ appSlice ])

  return <Dialog 
           className={ clsx( classes.layout) } 
           open
           fullScreen
           onClose={ (e) => {
             e.preventDefault()
             // console.log ( 'close dialog', isMobile)
           }}>
           <div id={ `layout` }>
             <Branding />
             <TimeMachine />
           </div>
        </Dialog>
}
