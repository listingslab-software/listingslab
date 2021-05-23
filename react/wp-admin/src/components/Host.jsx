import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Avatar,
    Card,
    CardHeader,
    // Typography,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	host:{
		border: '1px solid rgba(0,0,0,0.25)',
		boxShadow: 'none',
		borderRadius: 'none',
	},

}))

export default function Host( props ) {
	
	const classes = useStyles() 

	return	<Card className={ clsx( classes.host ) }>
				<CardHeader 
					avatar={ <Avatar /> }
					title={ `Host` }
					subheader={ `fsdfh,l ojdo` }
				/>
			</Card>
}
