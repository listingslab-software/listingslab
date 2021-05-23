import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 

import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	debugger:{
		margin: theme.spacing(),
		border: '1px solid rgba(0,0,0,0.25)',
		boxShadow: 'none',
		borderRadius: 'none',
	},
}))

export default function Debugger( props ) {
	
	const classes = useStyles() 
	const hostSlice = useSelector(state => state.host)
	const {
     	error,
    } = hostSlice

	if ( error ) console.log ('error', error)

	return	<Card className={ clsx( classes.debugger ) }>
				<CardHeader 
					avatar={ <Icon icon={ `bug` } color={ `primary` } /> }
					title={ `Debugger` }
				/>
				<CardContent>
					<Typography variant={ `body1` } >
						This is the redux hostSlice
					</Typography>
					<pre>
						{ JSON.stringify( hostSlice, null, 2) }
					</pre>
				</CardContent>
			</Card>
}
