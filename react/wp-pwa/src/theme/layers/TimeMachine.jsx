import React from 'react'
import { useSelector } from 'react-redux'
// import {
//     Button,
// } from '@material-ui/core/'
import { SVGTimeMachine } from '../'
import {
    navigateTo,
} from '../../redux/app/actions'
// import BGEffects from './BGEffects'

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
                  navigateTo( `/wp-admin/admin.php?page=listingslab%2Fphp%2FListingslab.php`, `_blank` )
                }}
                style={{
                  cursor: 'pointer',
                }} 
              />

              
          </div>
}
 