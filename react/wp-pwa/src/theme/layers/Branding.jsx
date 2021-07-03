import React from 'react'
import { useSelector } from 'react-redux'
import {
    useTheme,
    Typography,
} from '@material-ui/core/'
import { 
    Blokey,
} from'../'

export default function Branding() {
  
  const theme = useTheme()
  const appSlice = useSelector(state => state.app)
  const {
    isMobile,
  } = appSlice
  const suppress = true
  if ( !suppress ){
    console.log ( 'isMobile', isMobile )
  }

  return <div id={`branding`}
              style={{
                  height: 55,
                  width: 240,
                  position: 'absolute',
                  zIndex: 100,
                  opacity: 0,
              }}>
                  <Typography variant={ `h4` } style={{
                              left: 49,
                              fontWeight: 'lighter',
                              height: 59,
                              position: 'absolute',
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
                          }} />
          </div>
}
