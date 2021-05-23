import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import { 
	toggleOpen,
} from '../redux/greybeard/actions'
import {
	makeStyles,
	useTheme,
	Avatar,
	Card,
	CardHeader,
    Dialog,
    DialogContent,
    IconButton,
    Grid, 
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'
import { 
	WordpressMenu,
	Collapsing, 
	SettingsMenu, 
	CustomizedMenus, 
} from '../components'
// import { AnimatedSVG } from '../animation'

const useStyles = makeStyles((theme) => ({
  greyBeardDialog:{
  	background: 'none',
  },
  rightCol:{
  	marginTop: theme.spacing(3),
  },
  closeTrigger: {
  	zIndex:123456,
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    background: 'white',
  },
  hTag: {
  	fontWeight: 'lighter',
  },
  grow: {
  	flexGrow: 1,
  }
}))

export default function GreyBeardDialog( props ) {

	const classes = useStyles() 	
	const theme = useTheme()
	const primaryColor = theme.palette.primary.main
	const greybeardSlice = useSelector(state => state.greybeard)
	const {
     	open,
    } = greybeardSlice
	
	let wpSiteTitle = `Title`
	let wpSiteTagline = `Tagline`
	let wpSiteAvatar = `/logo192.png`

	if ( open ){
		return	<Dialog
					open={ open }
					className={ clsx( classes.greyBeardDialog )}
					fullWidth
					fullScreen
					maxWidth={ `sm` }
					onClose={ () => {  }}>
				<DialogContent>
					ashf
				</DialogContent>
			</Dialog>


	}	

				return <IconButton
							className={ clsx( classes.closeTrigger )}
		        			variant={ `text` }
		        			color={ `primary` }
		        			onClick={ (e) => {
		        				e.preventDefault()
		        				toggleOpen( true )
		        			}}>
		        			<Icon icon={ `pwa` } color={ `inherit` } />				
						</IconButton>
	
}
