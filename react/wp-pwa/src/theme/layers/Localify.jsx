import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
    CardHeader,
    CardContent,
    Collapse,
    IconButton,
    Typography,
} from '@material-ui/core/'
import {
    getFlagSrc,
    getDeviceStr,
    getLocationStr,
    getBrowserSrc,
} from '../../redux/localify/actions'

import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  isCode: {
    // border: '1px solid red',
    fontFamily: 'Courier',
  },
  actionBtn: {
    // margin: theme.spacing(2),
  }
}))

export default function Localify() {
  
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState( false )
  const appSlice = useSelector(state => state.app)
  const {
    isMobile,
  } = appSlice
  const suppress = true
  if ( !suppress ) console.log ( 'isMobile', isMobile )

  const localifySlice = useSelector(state => state.localify)
  const {
      individual,
  } = localifySlice

  return <div id={`localify`}
              style={{
                  // border: '1px solid #ddd',
                  // height: 55,
                  // width: '100%',
                  position: 'absolute',
                  zIndex: 100,
                  opacity: 0,
              }}>
                  { !individual ? null : <React.Fragment>
                    
                      <CardHeader
                          action={ <div style={{ display: 'flex', }}>
                                      <IconButton>
                                        <Avatar src={ getFlagSrc( individual ) } />
                                      </IconButton>
                                      <IconButton>
                                        <Avatar src={ getBrowserSrc( individual ) } />
                                      </IconButton>
                                    </div> }
                          title={ getDeviceStr( individual ) }
                          subheader={ getLocationStr ( individual ) }
                          avatar={ <IconButton 
                                       className={ classes.actionBtn }
                                       onClick={ ( e ) => {
                                         e.preventDefault()
                                         // console.log ('toggle collapsed')
                                         setExpanded( !expanded )
                                       }}>

                                      <Icon icon={ `privacy` } color={ `black` } />
                                    </IconButton>}
                      /> 
                  </React.Fragment>
              }
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant={ `h1` }>
                      Hello
                    </Typography>
                    <Typography className={ classes.isCode }>
                      { JSON.stringify( individual, null, 2 ) }
                    </Typography>
                  </CardContent>
              </Collapse>
          </div>
}

/*

*/