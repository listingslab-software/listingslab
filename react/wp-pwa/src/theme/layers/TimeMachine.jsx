import React from 'react'
import { useSelector } from 'react-redux'
// import {
//     Button,
// } from '@material-ui/core/'
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
                  zIndex: 200,
                  height: 254,
                  width: 326,
                  position: 'absolute',
                  opacity: 0,
              }}>
              <SVGTimeMachine 
                onClick={ (e) => {
                  e.preventDefault()
                  console.log ('CLICK SVGTimeMachine')
                }}
                style={{
                  // border: '1px solid red',
                  cursor: 'pointer',
                }} 
              />
          </div>
}
 