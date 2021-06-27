import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
} from '@material-ui/core/'
// import {
//   navigateTo,
// } from '../redux/app/actions'
// import { 
//   Icon,
// } from '../theme'

const useStyles = makeStyles((theme) => ({
  pwaData: {
    overflow: 'hidden',
    minWidth: 350,
  },
  raw: {
    fontSize: '10px',
    overflow: 'hidden',
  },
}))

export default function PWAData() {
  
  const classes = useStyles()
  const wordpressSlice = useSelector(state => state.wordpress)
  const {
    pwaData,
  } = wordpressSlice

  return <div className={ classes.pwaData } >
            
                  <Typography variant={ `h6` } gutterBottom >
                    PWAData
                  </Typography>

                  <pre className={ classes.raw }>
                    { JSON.stringify( pwaData, null, 2 ) }
                  </pre>
                  
        </div>
}
