import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    IconButton,
    Button,
} from '@material-ui/core/'
import MuiAlert from '@material-ui/lab/Alert'
import { AlertTitle } from '@material-ui/lab'
import {
  navigateTo,
} from '../redux/app/actions'
import { 
  Icon,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  systemError: {
    overflow: 'hidden',
    minWidth: 350,
  },
  mightyBtn: {
    // padding: theme.spacing(),
  },
  raw: {
    fontSize: '10px',
    overflow: 'hidden',
  },
  btnTxt:{
    color: 'white',
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function SystemError() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    error,
  } = appSlice
  if ( !error ) return null

  const [rawError, setRawError] = React.useState( false )

  return <div className={ classes.systemError } >
            <Alert 
              variant={`filled`}
              severity={ `error` }>
                <AlertTitle className={classes.titleTxt}>
                  <Typography variant={ `h6` } gutterBottom >
                    System Error
                  </Typography>

                  <Typography variant={ `body1` } gutterBottom >
                    { error.toString() }
                  </Typography>

                  <IconButton 
                    className={ classes.mightyBtn }
                    variant={ `contained` }
                    color={ `secondary` }
                    onClick={ (e) => {
                      e.preventDefault()
                      setRawError( !rawError )
                    }}>
                    <Icon icon={ `code`} color={`secondary`} />
                  </IconButton>

                  <Button 
                    className={ classes.mightyBtn }
                    variant={ `text` }
                    color={ `primary` }
                    onClick={ (e) => {
                      e.preventDefault()
                      navigateTo(`/`, `_self`)
                    }}>
                    <Icon icon={ `restart` } color={`secondary`} />
                    <span className={ classes.btnTxt }>
                      Restart
                    </span>
                    
                  </Button>

                  { rawError ? <pre className={ classes.raw }>
                    { JSON.stringify( error, null, 2 ) }
                  </pre> : null }
                  
                </AlertTitle>
            </Alert>
        </div>
}
