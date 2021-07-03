import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Dialog,
} from '@material-ui/core/'
import { 
    Branding,
} from'./'
import {
  setClient,
} from '../redux/app/actions'
import {
  animationInitted,
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
  const {
    isMobile,
  } = appSlice

  React.useEffect(() => {
    const { 
        initted,
    } = layoutSlice        
    if ( !initted ){ 
        animateLayout(
          `setup`, 
          `#layout`, 
          () => {
            // console.log ('Finished time out.')
          }, 
          { 
             spriteW: 250, 
             spriteH: 60,
          },
          3,
        )
        animationInitted( true )
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
             console.log ( 'close dialog', isMobile)
           }}>
           
           <div id={ `layout` }>
             <Branding />
           </div>
           
        </Dialog>
}
