import React from 'react'
import { useSelector } from 'react-redux'
import { SVGTimeMachine } from '../'

export default function TimeMachine() {
  
  // const theme = useTheme()
  const appSlice = useSelector(state => state.app)
  const {
    isMobile,
  } = appSlice
  const suppress = true
  if ( !suppress ) console.log ( 'isMobile', isMobile )

  return <div id={`timeMachine`}
              style={{
                  height: 254,
                  width: 326,
                  position: 'absolute',
                  opacity: 0,
              }}>
                  <SVGTimeMachine color={ `gold` } />
          </div>
}
 