import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Tooltip,
} from '@material-ui/core/'
import { noPwa } from '../theme/animate'
import {
  initNonPwa,
} from '../redux/animation/actions'
import {
  togglePwaOpen,
} from '../redux/app/actions'


import SVGTimeMachine from '../theme/jsxSVG/SVGTimeMachine'

const useStyles = makeStyles((theme) => ({
  mightyBtn: {
    cursor: 'pointer',
    position: 'fixed',
    left: 0,
    top: 0,
    height: 326,
    width: 254,
  }, 
  formControl:{
    marginTop: theme.spacing(),
  }
}))

export default function TimemachineBtn() {
  const classes = useStyles()
  const localifySlice = useSelector(state => state.localify) 
  const animationSlice = useSelector(state => state.animation) 
  const {
    individual,
  } = localifySlice

  React.useEffect(() => {
    const {
      nonPwaInitted,
      nonPwaInitting,
    } = animationSlice
    if ( !nonPwaInitted && !nonPwaInitting && individual ){
      initNonPwa()
      noPwa(`start`, `#time-machine`, {}, 5, () => {
              console.log ('iz good.')
            })
    }
  }, [ animationSlice, individual ])
  if ( !individual ) return <div id={`timemachineBtn`} />

  return <Tooltip 
            title="Open PWA" 
            aria-label="open-pwa"
            placement="left-end"
         >
            <div id={`timemachineBtn`}
              className={ classes.mightyBtn }
              onClick={ ( e ) => {
                e.preventDefault()
                togglePwaOpen( true )
              }}>
              <div style={{
                    left: -500,
                    height: 326,
                    width: 254,
                    position: 'absolute',
                    zIndex: 1234567,
                    // opacity: 0,
                }}>
                <SVGTimeMachine />
              </div>
            </div>
          </Tooltip>
}
