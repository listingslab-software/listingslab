import React from 'react'
import HTMLRenderer from 'react-html-renderer'
import { useSelector } from 'react-redux'
// import moment from 'moment'
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    Avatar,
    Grid,
    Typography,
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
    logo,
    name,
    description,
    image,
    html,
    title,
    // isAdmin,
  } = pwaData

  // console.log( 'isAdmin', isAdmin )

  return <Card className={ classes.pwaData } >
          <PWANav />   
          <CardHeader
            avatar={ <Avatar src={ logo } /> }
            title={ name }
            subheader={ description }
          />
          <CardContent className={ classes.pusher }>

            <Grid container>
              
              <Grid item xs={ 12 } md={ 8 }>
                <div className={ classes.html }>
                  <Typography variant={ `h5` } gutterBottom className={ classes.hTags }>
                    { title }
                  </Typography>
                  <HTMLRenderer html={ html } />
                </div>
              </Grid>

              <Grid item xs={ 12 } md={ 4 }>
                <CardMedia
                    className={classes.media}
                    image={ image }
                    title={ title }
                  />
              </Grid>
            </Grid>

            

          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
}

/*
<pre>
              { JSON.stringify( pwaData, null, 2 ) }
            </pre>
*/