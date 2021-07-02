import React from 'react'
// import { useSelector } from 'react-redux'
import {
    makeStyles,
    Card,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  card: {
      margin: theme.spacing(),
      background: 'none',
      borderRadius: 0,
      boxShadow: 'none',
  },
}))

export default function Sidebar() {
  
  const classes = useStyles()
  // const appSlice = useSelector(state => state.app)
  // const {
  //   overlay,
  // } = appSlice

  return <Card className={ classes.card } >
            Sidebar
          </Card>
}
