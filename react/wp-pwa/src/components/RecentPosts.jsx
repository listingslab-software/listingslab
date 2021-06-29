import React from 'react'
// import HTMLRenderer from 'react-html-renderer'
import { useSelector } from 'react-redux'
// import moment from 'moment'
import {
    makeStyles,
    Card,
    // CardContent,
    CardHeader,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  pwaData: {
    overflow: 'hidden',
    background: 'white',
    margin: theme.spacing(),

  },
  pre: {
    fontSize: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  hTags:{
    fontWeight: 'lighter',
  },
  raw: {
    fontSize: '10px',
    overflow: 'hidden',
  },
}))

export default function RecentPosts() {
  
  const classes = useStyles()
  const wordpressSlice = useSelector(state => state.wordpress)
  const {
    pwaData,
  } = wordpressSlice
  const suppress = true
  if (!suppress) console.log (pwaData)

  return <Card className={ classes.pwaData } >
           <CardHeader 
             title={ `It's a website`}
             subheader={ `subheader` }
           />
        </Card>
}

/*
<pre>
  { JSON.stringify( pwaData, null, 2 ) }
</pre>
*/