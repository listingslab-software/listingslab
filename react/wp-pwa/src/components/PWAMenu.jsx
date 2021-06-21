import React from 'react'
import { useSelector } from 'react-redux'
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
import { toggleSkipIntroOpen } from '../packages'
import {
  navigateTo,
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
  
  const [ anchorEl, setAnchorEl ] = React.useState( null )
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main

  const skipIntroSlice = useSelector(state => state.skipIntro)
  const {
    open,
  } = skipIntroSlice

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
          // background: 'white',
        }}
        aria-controls={`menu`}
        aria-haspopup="true"
        onClick={ handleClick }>
        <Badge badgeContent={ 0 } color={ `primary` }>
          <Icon icon={ `menu` } color={ `secondary` } />
        </Badge>
      </IconButton>
      

    <StyledMenu 
      id={ `menu` }
      anchorEl={ anchorEl }
      keepMounted
      open={ Boolean(anchorEl) }
      onClose={ handleClose }
      style={{
        zIndex: 1234568,
      }}>
        
        <StyledMenuItem onClick={(e) => {
          e.preventDefault()
          navigateTo( `https://github.com/listingslab-software/listingslab`, `_blank`)
          handleClose()
        }}>
          <ListItemIcon>
            <Icon icon={ `github` } color={ `primary` } />
          </ListItemIcon>
          <ListItemText 
            primary={`GitHub` }
          />
        </StyledMenuItem>

        <StyledMenuItem onClick={(e) => {
            e.preventDefault()
            navigateTo( `/wp-admin/admin.php?page=listingslab%2Fphp%2FListingslab.php`, `_self` )
            handleClose()
          }}>
            <ListItemIcon>
              <Icon icon={ `wordpress` } color={ primaryColor } />
            </ListItemIcon>
            <ListItemText primary={`WordPress` } />
          </StyledMenuItem>

        <StyledMenuItem onClick={(e) => {
          e.preventDefault()
          toggleSkipIntroOpen( !open )
          handleClose()
        }}>
          <ListItemIcon>
            <Icon icon={ `skip` } color={ `primary` } />
          </ListItemIcon>
          <ListItemText 
            primary={`Skip Intro` }
          />
        </StyledMenuItem>

            
      </StyledMenu>

    </React.Fragment>
}