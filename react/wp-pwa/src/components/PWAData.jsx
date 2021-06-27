import React from 'react'
// import HTMLRenderer from 'react-html-renderer'
import { useSelector } from 'react-redux'
// import moment from 'moment'
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    Avatar,
} from '@material-ui/core/'

const w = document.documentElement.clientWidth

const useStyles = makeStyles((theme) => ({
  pwaData: {
    overflow: 'hidden',
    background: 'white',
    margin: theme.spacing(),
    width: w - 16,
  },
  pusher: {
    // border: '1px solid red',
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
  let suppress = false
  if ( pwaData && suppress) console.log ('pwaData', pwaData)
  if ( !pwaData ) return false
  const {
    logo,
    name,
    description,
    // content,
  } = pwaData
  // const {
  //   post_content,
  // } = postData

  return <Card className={ classes.pwaData } >
          <CardHeader
            avatar={ <Avatar src={ logo } /> }
            title={ name }
            subheader={ description }
          />
          <CardContent className={ classes.pusher }>
            <pre>
              { JSON.stringify( pwaData, null, 2 ) }
            </pre>
          </CardContent>
        </Card>
}

/*
<CardContent>
            <HTMLRenderer html={ post_content } />
            <pre>
              { JSON.stringify( pwaData, null, 2 ) }
            </pre>
          </CardContent>
*/