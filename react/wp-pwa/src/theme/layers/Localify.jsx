import React from 'react'
import { useSelector } from 'react-redux'
import {
    // useTheme,
    Avatar,
    CardHeader,
    // Typography,
} from '@material-ui/core/'
import {
    getFlagSrc,
    getDeviceStr,
    getLocationStr,
    getBrowserSrc,
} from '../../redux/localify/actions'

export default function Localify() {
  
  // const theme = useTheme()
  const appSlice = useSelector(state => state.app)
  const {
    isMobile,
  } = appSlice
  const suppress = true
  if ( !suppress ){
    console.log ( 'isMobile', isMobile )
  }

  const localifySlice = useSelector(state => state.localify)
  const {
      individual,
  } = localifySlice

  return <div id={`localify`}
              style={{
                  height: 55,
                  width: 360,
                  position: 'absolute',
                  zIndex: 100,
              }}>
                  { !individual ? null : <React.Fragment>
                    <CardHeader
                          action={ <Avatar src={ getBrowserSrc( individual ) } /> }
                          title={ `Who are you?`  }
                          subheader={ getDeviceStr( individual ) }
                      />

                      <CardHeader
                          action={ <Avatar src={ getFlagSrc( individual ) } /> }
                          title={ `& where do you come from?` }
                          subheader={ getLocationStr ( individual ) }
                      /> 
                  </React.Fragment>
              }

                  
                  
                  
          </div>
}

/*
<pre>
                    { JSON.stringify( individual, null, 2 ) }
                  </pre>
*/