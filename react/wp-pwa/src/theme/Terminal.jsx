import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Dialog,
    DialogContent,
} from '@material-ui/core/'
import {
  toggleTerminalOpen,
} from '../redux/app/actions'

const useStyles = makeStyles(( theme ) => ({
  terminal: {
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  content:{
    background: 'black',
    color: 'white',
  },
  isMobile:{
    margin: theme.spacing( 10 ) 
  }  
}))

export default function Terminal() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const { terminalOpen } = appSlice

  return <Dialog 
           className={ clsx( classes.terminal) } 
           open={ terminalOpen }
           fullScreen
           onClose={ (e) => {
             e.preventDefault()
             toggleTerminalOpen( false )
           }}>
           <DialogContent className={ clsx( classes.content) } >
             Last login: Mon Jul  5 11:24:36 on ttys002<br />
              You have mail.<br />
              listingslab@listingslab listingslab %
           </DialogContent>

                     
        </Dialog>
}
