import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    // Button,
    IconButton,
} from '@material-ui/core/'
import { Icon } from '../../theme'

const useStyles = makeStyles((theme) => ({
  pwaNav: {
    flexGrow: 1,
  },
  appBar:{
    boxShadow: 'none',
    background: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.main,
  },
}))

export default function RecentPosts() {
  const classes = useStyles()
  const wordpressSlice = useSelector(state => state.wordpress)
  const {
    pwaData,
  } = wordpressSlice
  let suppress = true
  if ( !suppress ) console.log ( 'pwaData', pwaData )
  // const {
  //   // logo,
  //   post,
  // } = pwaData
  // const {
  //   post_title
  // } = post
  // console.log ('pwaData', pwaData)

  return <div className={ classes.pwaNav }>
          <AppBar position={ `static` } className={ classes.appBar } >
            <Toolbar>
              <Typography variant={ `h6` } className={ classes.title }>
                Recent Posts
              </Typography>
              <IconButton 
                color={ `primary`}>
                <Icon icon={ `share` } /> 
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
}
