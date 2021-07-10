import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
    Button,
    CardActions,
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
    // getBrowserSrc,
    acceptGDPR,
} from '../../redux/localify/actions'

import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  isCode: {
    // border: '1px solid red',
    fontFamily: 'Courier',
    fontSize: 10,
  },
  thin:{
    fontWeight: 'lighter',
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  btnTxt:{
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
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
                  position: 'absolute',
                  zIndex: 100,
                  opacity: 0,
              }}>
              
              
                  <CardContent>
                    
                    <Typography variant={ `h4` } className={ classes.thin } gutterBottom>
                      Hello
                    </Typography>
                    
                    <Typography variant={ `body1` } gutterBottom>
                      <span 
                        onClick={ (e) => {
                          e.preventDefault()
                          setExpanded( true )
                        }}
                        className={ classes.link }>
                      This</span> is what your web request told us about you.  
                      Are you OK with us storing that kind of info in a database? 
                      We don't use cookies. 
                      See the <a className={ classes.link } href={ `/privacy` }>
                      privacy</a> page for more information
                    </Typography>

                  { !individual ? null : <React.Fragment>
                          <CardHeader
                              subheader={ getDeviceStr( individual ) }
                              title={ getLocationStr ( individual ) }
                              avatar={ <IconButton
                                          onClick={ (e) => {
                                            e.preventDefault()
                                            setExpanded( !expanded )
                                          }}>
                                            <Avatar src={ getFlagSrc( individual ) } />
                                          </IconButton>
                                      }
                          /> 
                      </React.Fragment>
                  }
                    <Collapse in={expanded} timeout="auto" unmountOnExit>

                      <Typography variant={ `body2` } 
                      className={ classes.isCode } gutterBottom>
                        { JSON.stringify( individual, null, 2 ) }
                      </Typography>

                    </Collapse>
                    
                  </CardContent>
                  
                  <CardActions>
                    
                    
                    <Button
                      variant={ `outlined` }
                      color={ `primary` }
                      onClick={ ( e ) => {
                        e.preventDefault()
                        acceptGDPR( true )
                      }}>
                      
                      <span className={ classes.btnTxt }>
                        I'm OK with that
                      </span>
                      <Icon icon={ `next` } />
                    </Button>


                    <Button
                       variant={ `text` }
                       color={ `default` }
                       onClick={ ( e ) => {
                         e.preventDefault()
                         acceptGDPR( false )
                       }}>
                       
                       <span className={ classes.btnTxt }>
                         Yeh, nah.
                       </span>
                       
                    </Button>

                  </CardActions>
               


          </div>
}

/*
action={ <div style={{ display: 'flex', }}>
                                      
                                      <IconButton>
                                        <Avatar src={ getBrowserSrc( individual ) } />
                                      </IconButton>
                                    </div> }
*/