import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Button,
    CardActions,
    CardContent,
    Collapse,
    Typography,
} from '@material-ui/core/'
import {
    acceptGDPR,
} from '../../redux/localify/actions'
import {
    togglePwaOpen
} from '../../redux/app/actions'
import { RecentPosts } from '../../components'
import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  isCode: {
    // border: '1px solid red',
    fontFamily: 'Courier',
    fontSize: 12,
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

  let gdpr = false
  if (individual){
    gdpr = individual.gdpr
  }
  if (!gdpr) gdpr = false

  return <div id={`localify`}
              style={{
                  position: 'absolute',
                  zIndex: 100,
                  opacity: 0,
              }}>
              
                  { !gdpr ? <div>

                      <CardContent>

                      <Typography 
                        variant={ `button` } 
                        className={ classes.thin } 
                        gutterBottom>
                        General Data Protection Regulation
                      </Typography>


                      <Typography variant={ `body2` } gutterBottom>
                        Know your <a 
                                    className={ classes.link } 
                                    href={ `https://gdpr-info.eu` }
                                    target={ `_blank` }
                                  >
                                    rights. 
                                  </a> Do you know what information 
                        your browser gave us? <span 
                          onClick={ (e) => {
                            e.preventDefault()
                            setExpanded( !expanded )
                          }}
                          className={ classes.link }>This</span> is what it told us about you.  
                        Are you OK with us storing that kind of info in a database? 
                        We don't use cookies, so really the whole GDPR thing is a bit 
                        pointless. Ho Hum. 
                        See our <a className={ classes.link } href={ `/privacy` }>
                        privacy</a> page for more information
                      </Typography>

                      <Collapse 
                        unmountOnExit
                        in={expanded} 
                        timeout={ `auto` }>
                        <Typography variant={ `body2` } 
                        className={ classes.isCode } gutterBottom>
                          { JSON.stringify( individual, null, 2 ) }
                        </Typography>
                      </Collapse>

                   <CardActions> 

                      <Button
                         variant={ `text` }
                         color={ `default` }
                         onClick={ ( e ) => {
                           e.preventDefault()
                           togglePwaOpen( false )
                           // acceptGDPR( false )
                         }}>
                         <Icon icon={ `previous` } />
                         <span className={ classes.btnTxt }>
                           Yeh, nah.
                         </span>
                      </Button>
                      
                      <Button
                        variant={ `contained` }
                        color={ `secondary` }
                        onClick={ ( e ) => {
                          e.preventDefault()
                          acceptGDPR( true )
                        }}>
                        <span className={ classes.btnTxt }>
                          Yes
                        </span>
                        <Icon icon={ `tick` } />
                      </Button>
      
                  </CardActions>
              
              </CardContent>

            </div> : null }

            <RecentPosts />
            
          </div>
}

/*
action={ <div style={{ display: 'flex', }}>
                                      
                                      <IconButton>
                                        <Avatar src={ getBrowserSrc( individual ) } />
                                      </IconButton>
                                    </div> }


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




<Typography variant={ `body2` }>
                      GDPR? { JSON.stringify( gdpr, null, 2 ) }
                    </Typography>
                    




*/