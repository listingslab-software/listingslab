import React from 'react'
// import { useSelector } from 'react-redux'
import {
    makeStyles,
    Fab,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

export default function SidebarBtn() {
  const classes = useStyles()
  return <Fab
            variant={ `extended` }
            size={ `small` }
            color={ `default` }
            className={classes.margin}
            onClick={ ( e ) => {
              e.preventDefault()
              console.log ('menu')
            }}>
            <Icon icon={ `left` } />
            Menu
          </Fab>
  }
