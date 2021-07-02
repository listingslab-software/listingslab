import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Drawer,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  drawer: {
      // margin: theme.spacing(),
      // background: 'none',
      // borderRadius: 0,
      // boxShadow: 'none',
  },
}))

export default function Sidebar() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    isMobile,
  } = appSlice

  return <Drawer 
            className={ classes.drawer } 
            // variant={ `permanent` }
            anchor={ `right` } 
            open={ !isMobile } 
         >
            <List dense>
               <ListItem button>
                 <ListItemAvatar>
                   <Icon icon={`right`} />
                 </ListItemAvatar>
                 <ListItemText 
                   primary={ `primary` }
                   secondary={ `secondary` }
                 />
               </ListItem>
            </List>
          </Drawer>
}
