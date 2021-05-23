import React from 'react'
import {
    withStyles,
    useTheme,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'

const StyledMenu = withStyles({
  paper: {
    // border: '1px solid #d3d4d5',
  },
})(( props ) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function CustomizedMenus() {
  
  const [ anchorEl, setAnchorEl ] = React.useState( null )
  const theme = useTheme()

  const primaryColor = theme.palette.primary.main


  const handleClick = ( e ) => {
    setAnchorEl( e.currentTarget )
  }

  const handleClose = () => {
    setAnchorEl( null )
  }

  return (
    <div>
      
      <IconButton
        style={{
          zIndex:123456,
          position: 'absolute',
          right: theme.spacing( 2 ),
          top: theme.spacing( 2 ),
          background: 'white',
        }}
        aria-controls={`wordpress-menu`}
        aria-haspopup="true"
        onClick={ handleClick }>
        <Icon icon={ `wordpress` } color={ primaryColor } />
      </IconButton>
        
        <StyledMenu
          id={ `wordpress-menu` }
          anchorEl={ anchorEl }
          keepMounted
          open={ Boolean(anchorEl) }
          onClose={ handleClose }>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            console.log ( 'Dashboard') 
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `dashboard` } color={ `inherit` } />
            </ListItemIcon>
            <ListItemText primary={`Dashboard` } />
          </StyledMenuItem>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            console.log ( 'Plugins') 
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `plugins` } color={ `inherit` } />
            </ListItemIcon>
            <ListItemText primary={`Plugins` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            console.log ( 'Theme') 
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `theme` } color={ `inherit` } />
            </ListItemIcon>
            <ListItemText primary={`Theme` } />
          </StyledMenuItem>

          

        </StyledMenu>
    </div>
  )
}


/*
// gotoURL(`/wp-admin/customize.php?return=%2Fwp-admin%2Fadmin.php%3Fpage%3Dgreybeard%252Fphp%252FGreyBeard.php`, `_self`)

*/