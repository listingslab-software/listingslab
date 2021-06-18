import React from 'react'
import { useSelector } from 'react-redux'
import { navigateTo } from '../redux/app/actions'
import {
    withStyles,
    useTheme,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Badge,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(( props ) => (
  <Menu
    elevation={0}
    getContentAnchorEl={ null }
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
    paddingRight: 50,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function PWAMenu() {
  
  const wordpressSlice = useSelector(state => state.wordpress)
  const {
    pwaData,
  } = wordpressSlice
  const { 
    postData 
  } = pwaData
  let postId = null
  if ( postData ){
    const { ID } = postData
    postId = ID
  }
  const [ anchorEl, setAnchorEl ] = React.useState( null )
  const theme = useTheme()
  // const primaryColor = theme.palette.primary.main

  const handleClick = ( e ) => {
    setAnchorEl( e.currentTarget )
  }

  const handleClose = () => {
    setAnchorEl( null )
  }

  return <React.Fragment>
      
      <IconButton
        style={{
          zIndex: 123456,
          position: 'absolute',
          right: theme.spacing( 1 ),
          top: theme.spacing( 1 ),
          background: 'white',
        }}
        aria-controls={`wordpress-menu`}
        aria-haspopup="true"
        onClick={ handleClick }>
        <Badge badgeContent={ `!` } color={ `secondary` }>
          <Icon icon={ `menu` } color={ `primary` } />
        </Badge>
      </IconButton>
      
        
        <StyledMenu 
          style={{
            zIndex: 1234568,
          }}
          id={ `wordpress-menu` }
          anchorEl={ anchorEl }
          keepMounted
          open={ Boolean(anchorEl) }
          onClose={ handleClose }>


          <Typography 
            variant={ `button`} 
            style={{
            padding: 16,
            marginTop: 16,
            marginBottom: 16,
          }}>
            GitHub
          </Typography>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://github.com/orgs/listingslab-software/projects/14?fullscreen=true`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `github` } color={ `black` } />
            </ListItemIcon>
            <ListItemText 
              primary={`Open Soure Management` }
              // secondary={ `Open Soure Management` } 
            />
          </StyledMenuItem>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://github.com/listingslab-software/listingslab/issues/new/choose`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `github` } color={ `black` } />
            </ListItemIcon>
            <ListItemText primary={`New Issue` } />
          </StyledMenuItem> 


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `https://github.com/listingslab-software/listingslab`, `_blank` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `github` } color={ `black` } />
            </ListItemIcon>
            <ListItemText primary={`Download Free` } />
          </StyledMenuItem>




          <Typography 
            variant={ `button`} 
            style={{
            padding: 16,
            marginBottom: 16,
          }}>
            WordPress
          </Typography>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/admin.php?page=listingslab%2Fphp%2FListingslab.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
            
              <Icon icon={ `pwa` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`@listingslab` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            // console.log ( 'Dashboard') 
            navigateTo( `/wp-admin/`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `dashboard` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Dashboard` } />
          </StyledMenuItem>


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/post-new.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `add` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`New Post` } />
          </StyledMenuItem>

          { postId ? <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/post.php?post=${postId}&action=edit`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `edit` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Edit` } />
          </StyledMenuItem> : null }


          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/plugins.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `plugins` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Plugins` } />
          </StyledMenuItem>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/customize.php?return=%2Fwp-admin%2Fadmin.php%3Fpage%3Dlistingslab%252Fphp%252FListingslab.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `theme` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Theme` } />
          </StyledMenuItem>

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin//nav-menus.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `menu` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Menus` } />
          </StyledMenuItem>          

          
        </StyledMenu>

    </React.Fragment>
}

/*
*/