/*
  <Alert severity="error">This is an error message!</Alert>
  <Alert severity="warning">This is a warning message!</Alert>
  <Alert severity="info">This is an information message!</Alert>
  <Alert severity="success">This is a success message!</Alert>
*/

import React from 'react'
import { useSelector } from 'react-redux'
import { closeFeedback } from '../redux/app/actions'
import MuiAlert from '@material-ui/lab/Alert'
import { AlertTitle } from '@material-ui/lab'
import { 
  makeStyles,
  Snackbar,
} from '@material-ui/core'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  pushW: {
    minWidth: 280,
  },
  titleTxt: {
    // paddingTop: theme.spacing(0.5),
  },
  feedback: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function Feedback() {

  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    feedback,
  } = appSlice
  const [open, setOpen] = React.useState(feedback ? true : true)
  
  // console.log ('feedback', feedback)
  if (!feedback) return null

  const onFinished = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    setTimeout(() => {
      closeFeedback()
    }, 1000)
  }
  
  return <div className={classes.feedback}>
          <Snackbar 
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={open} 
            onClose={onFinished}
            autoHideDuration={5000}>
            <Alert 
              onClose={ onFinished } 
              variant={`filled`}
              severity={ feedback.severity }>
              <div className={classes.pushW}>
                <AlertTitle className={classes.titleTxt}>
                  { feedback.message }
                </AlertTitle>
              </div>
            </Alert>
          </Snackbar>
        </div>
}