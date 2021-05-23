import React from 'react'
import clsx from 'clsx'
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
}))

export default function Host( props ) {
	
	const classes = useStyles() 

	return	<Card className={ clsx( classes.host ) }>
				<CardHeader 
					avatar={ <Icon icon={ `host` } color={ `primary` } /> }
					title={ `Host` }
				/>
			</Card>
}
