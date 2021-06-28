import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    // IconButton,
} from '@material-ui/core/'
// import { Icon } from '../theme'

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

export default function PWANav() {
  const classes = useStyles()
  const wordpressSlice = useSelector(state => state.wordpress)
  const {
    pwaData,
  } = wordpressSlice
  const {
    // logo,
    post,
  } = pwaData
  const {
    post_title
  } = post
  // console.log ('post_title', post_title)

  return <div className={ classes.pwaNav }>
          <AppBar position={ `static` } className={ classes.appBar } >
            <Toolbar>
              <Typography variant={ `h6` } className={ classes.title }>
                { post_title }
              </Typography>
              <Button 
                variant={ `text`}
                color={ `primary`}>
                Share
              </Button>
            </Toolbar>
          </AppBar>
        </div>
}
