import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Card,
    // Typography,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	host:{
		border: '1px solid rgba(0,0,0,0.25)',
	},

}))

export default function Host( props ) {
	
	const classes = useStyles() 

	return	<Card>
				<div className={ clsx( classes.host ) } >
					host
				</div>
			</Card>
}
