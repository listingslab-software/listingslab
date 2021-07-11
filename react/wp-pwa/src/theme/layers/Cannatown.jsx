import React from 'react'
import { useSelector } from 'react-redux'
// import {
//     Button,
// } from '@material-ui/core/'
import { SVGCannatown } from '../'
// import {
//     togglePwaOpen,
// } from '../../redux/app/actions'

export default function Cannatown() {
  
  // const theme = useTheme()
  const appSlice = useSelector(state => state.app)
  const {
    isMobile,
  } = appSlice
  const suppress = true
  if ( !suppress ) console.log ( 'isMobile', isMobile )
  return <div id={`cannatown`}
              style={{ 
                  zIndex: 122,
                  width: 701,
                  height: 275,
                  position: 'absolute',
                  opacity: 0,
                  bottom: 100,
                  // display: 'none',
              }}>
              <SVGCannatown />
          </div>
}
 