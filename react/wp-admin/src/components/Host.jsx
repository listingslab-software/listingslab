import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import IconSVG from '../theme/Icon.svg'
import {
    makeStyles,
    Avatar,
    Card,
    CardHeader,
    IconButton,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	host:{
		// margin: theme.spacing(),
		border: 'none',
		boxShadow: 'none',
		borderRadius: 0,
		// background: 'rgba(0,0,0,0.015)',
	},
	avatar: {
	},
}))

export default function Host( props ) {
	
	const classes = useStyles() 
	// const theme = useTheme()
	// const primaryColor = theme.palette.primary.main

	const hostSlice = useSelector(state => state.host)
	const {
     	wpData,
    } = hostSlice

    if ( !wpData ) return null
    	
    const {
    	name,
    	description,	
    	avatar,
    } = wpData

    let avatarSrc = IconSVG
    if ( avatar ) avatarSrc = avatar
    let nameTxt = `Site Name`
    if ( name ) nameTxt = name
    let descriptionTxt = `Description (WordPress Tagline)`
    if ( description ) descriptionTxt = description
    
	return	<Card className={ clsx( classes.host ) }>
				<CardHeader 
					avatar={ 	<IconButton
									color={ `secondary` }
									onClick={ ( e ) => {
										e.preventDefault()
										window.open (`/wp-admin/admin.php?page=listingslab%2Fphp%2FListingslab.php`, `_self`)
									}}>
									<Avatar src={ avatarSrc } className={ clsx( classes.avatar ) } />
								</IconButton>
							}
					title={ nameTxt }
					subheader={ descriptionTxt }
				/>
				
			</Card>
}

/*
<Typography variant={ `body1` } >
						{ `${ admin_email }` }
					</Typography>
<CardContent>
					<Typography variant={ `body1` } >
						url { `${ url }` }
					</Typography>
				</CardContent>

*/