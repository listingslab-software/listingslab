import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
    makeStyles,
    Card,
    CardHeader,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	host:{
		margin: theme.spacing(),
		border: '1px solid rgba(0,0,0,0.25)',
		boxShadow: 'none',
		borderRadius: 'none',
	},
	avatar: {
		height: 100,
		width: 100,
	},
}))

export default function API( props ) {
	
	const classes = useStyles() 

	const apiSlice = useSelector(state => state.api)
	const {
     	api,
    } = apiSlice

	if (!api) return null

	return	<Card className={ clsx( classes.host ) }>
				<CardHeader 
					avatar={ <Icon icon={ `api` } color={ `primary` } /> }
					title={ `API` }
				/>
				
			</Card>
}

/*
<Typography variant={ `body1` } >
						{ `${ admin_email }` }
					</Typography>
*/