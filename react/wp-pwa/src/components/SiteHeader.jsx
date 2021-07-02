import React from 'react'
// import HTMLRenderer from 'react-html-renderer'
import { useSelector } from 'react-redux'
// import moment from 'moment'
import {
    makeStyles,
    Card,
    Avatar,
    CardContent,
    IconButton,
} from '@material-ui/core/'
import { navigateTo } from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({
  card: {
    overflow: 'hidden',
    background: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    margin: theme.spacing(),
  },
  logo: {
    width: 65,
    height: 65,
  }
}))

export default function RecentPosts() {
  
  const classes = useStyles()
  const wordpressSlice = useSelector(state => state.wordpress)
  const {
    pwaData,
  } = wordpressSlice
  const suppress = true
  if (!suppress) console.log (pwaData)
  const {
    logo,
  } = pwaData

  // console.log( 'pwaData', pwaData )
  if (!logo ) return null

  return <Card className={ classes.card } >
           <CardContent>
             <IconButton
               color={ `primary` }
               onClick={ ( e ) => {
                 e.preventDefault()
                 navigateTo(`/`, `_self`)
               }}>
                <Avatar src={ logo } className={ classes.logo } />
             </IconButton>
             
           </CardContent>
           
        </Card>
}

/*
<pre>
              { JSON.stringify( pwaData, null, 2 ) }
            </pre>
*/