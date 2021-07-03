import React from 'react'
// import { useSelector } from 'react-redux'
import {
    withStyles,
    useTheme,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Badge,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'
// import { toggleSkipIntroOpen } from '../packages'
import {
  navigateTo,
  // openFeedback,
} from '../redux/app/actions'

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
      backgroundColor: 'rgba(0,0,0,0.01)',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        // color: theme.palette.common.white,
      },
    },
    '&:focus': {
      // backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        // color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

export default function PWAMenu() {
  
  const [ anchorEl, setAnchorEl ] = React.useState( null )
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main
  // const skipIntroSlice = useSelector(state => state.skipIntro)
  // const {
  //   open,
  // } = skipIntroSlice
  const open = true

  const handleClick = ( e ) => {
    setAnchorEl( e.currentTarget )
  }

  const handleClose = () => {
    setAnchorEl( null )
  }

  return <React.Fragment>

      { open ? 

        <IconButton
          aria-controls={`pwa-menu`}
          aria-haspopup="true"
          style={{
            zIndex: 123456,
            position: 'fixed',
            right: theme.spacing( 1 ),
            bottom: theme.spacing( 1 ),
          }}
          onClick={ ( e ) => {
            e.preventDefault()
            // toggleSkipIntroOpen( false )
          } }>
          <Badge badgeContent={ null } color={ `secondary` }>
            <Icon icon={ `wordpress` } color={ primaryColor } />
          </Badge>
        </IconButton>

       : <IconButton
        aria-controls={`pwa-menu`}
        aria-haspopup="true"
        style={{
          zIndex: 123456,
          position: 'fixed',
          right: theme.spacing( 1 ),
          bottom: theme.spacing( 1 ),
        }}
        onClick={ handleClick }>
        <Badge badgeContent={ null } color={ `secondary` }>
          <Icon icon={ `pwa` } color={ `primary` } />
        </Badge>
      </IconButton> }
      
      
      

    <StyledMenu 
      id={ `menu` }
      anchorEl={ anchorEl }
      keepMounted
      open={ Boolean(anchorEl) }
      onClose={ handleClose }
      style={{
        zIndex: 1234568,
      }}>


      { open ? <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            // toggleSkipIntroOpen( false )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `wordpress` } color={ primaryColor } />
            </ListItemIcon>
            <ListItemText primary={`WordPress` } />
          </StyledMenuItem> 

          : 

          <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            // toggleSkipIntroOpen( true )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `pwa` } color={ `primary` } />
            </ListItemIcon>
            <ListItemText primary={`Open` } />
          </StyledMenuItem> }


        <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/admin.php?page=listingslab%2Fphp%2FListingslab.php`, `_self`)
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `wordpress` } color={ primaryColor } />
            </ListItemIcon>
            <ListItemText primary={`Settings` } />
          </StyledMenuItem>


        <StyledMenuItem onClick={(e) => {
          e.preventDefault()
          navigateTo( `https://github.com/listingslab-software/listingslab`, `_blank`)
          handleClose()
        }}>
          <ListItemIcon>
            <Icon icon={ `github` } color={ `primary` } />
          </ListItemIcon>
          <ListItemText 
            primary={`Download` }
          />
        </StyledMenuItem>


            
      </StyledMenu>

    </React.Fragment>
}

/*
  
*/