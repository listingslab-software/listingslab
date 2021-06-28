import React from 'react'
import HTMLRenderer from 'react-html-renderer'
import { useSelector } from 'react-redux'
// import moment from 'moment'
import {
    makeStyles,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from '@material-ui/core/'
import { PWANav } from './'

// const w = document.documentElement.clientWidth

const useStyles = makeStyles((theme) => ({
  pwaData: {
    overflow: 'hidden',
    background: 'white',
    margin: theme.spacing(),
  },
  html:{
    margin: theme.spacing(),
  },
  pusher: {
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
    image,
    post,
  } = pwaData

  const {
    post_title,
    post_content,
  } = post

  // console.log( 'isAdmin', isAdmin )

  return <Card className={ classes.pwaData } >
          <PWANav />   
          
          <CardContent className={ classes.pusher }>

            <Grid container>
              
              <Grid item xs={ 12 } md={ 8 }>
                <div className={ classes.html }>
                  <HTMLRenderer html={ post_content } />
                </div>
              </Grid>

              <Grid item xs={ 12 } md={ 4 }>
                <CardMedia
                    className={classes.media}
                    image={ image }
                    title={ post_title }
                />
              </Grid>
            </Grid>

          </CardContent>
        </Card>
}

/*
<pre>
              { JSON.stringify( pwaData, null, 2 ) }
            </pre>
*/