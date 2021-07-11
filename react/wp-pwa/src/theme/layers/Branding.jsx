import React from 'react'
import { useSelector } from 'react-redux'
import {
    useTheme,
    ButtonBase,
    Typography,
} from '@material-ui/core/'
import { 
    Blokey,
} from'../'
import {
    navigateTo,
} from '../../redux/app/actions'

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
              <ButtonBase
                onClick={ ( e ) => {
                            e.preventDefault()
                            navigateTo( `/`, `_self`)
                          }}>

                  <Typography variant={ `h4` } style={{
                              left: 49,
                              fontWeight: 'lighter',
                              height: 59,
                              top: 0.75,
                              position: 'absolute',
                          }}>
                      @listingslab
                  </Typography>
                  <Blokey id={`blokey`} 
                          color= { theme.palette.primary.main }
                          style={{
                              left: 0,
                              width: 40,
                              height: 40,
                              top: 1,
                              position: 'absolute',
                          }} />
                </ButtonBase>
          </div>
}
