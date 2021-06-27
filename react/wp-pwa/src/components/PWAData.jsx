import React from 'react'
import HTMLRenderer from 'react-html-renderer'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    Avatar,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  pwaData: {
    overflow: 'hidden',
    background: 'white',
    margin: theme.spacing(),
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
    postData,
  } = pwaData
  const {
    post_title,
    post_content,
    post_date,
  } = postData

  return <Card className={ classes.pwaData } >
          <CardHeader 
            avatar={ <Avatar src={ logo } /> }
            title={ post_title }
            subheader={ moment(post_date).fromNow() }
          />
          <CardContent>
            <HTMLRenderer html={ post_content } />

            <pre>
              { JSON.stringify( postData, null, 2 ) }
            </pre>
          </CardContent>
        </Card>
}
