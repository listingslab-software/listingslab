import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
    makeStyles,
    Avatar,
    Card,
    CardHeader,
    CardContent,
} from '@material-ui/core/'
// import { Icon } from '../theme'
import { 
	getIndividualById,
	getDeviceStr, 
	// getLocationStr,
	getFlagSrc,
} from '../redux/individuals/actions'

const useStyles = makeStyles(theme => ({
	individual:{
		padding: theme.spacing(),
		margin: theme.spacing(),
		border: '1px solid rgba(255,255,255,0.75)',
		background: 'rgba(255,255,255,0.25)',
		boxShadow: 'none',
	},
}))

export default function IndividualSelected( props ) {
	
	const classes = useStyles() 
	const individualsSlice = useSelector(state => state.individuals)
 	const {
 		selected,
 	} = individualsSlice
 	if ( !selected ) return null
 	let individual = getIndividualById( selected )
 	if ( !individual ) return null

	return	<Card className={ clsx( classes.individual ) }>
				<CardHeader 
					avatar={ <Avatar src={ getFlagSrc( individual ) } /> }
					title={ individual.fingerprint }
					// title={ getLocationStr( individual ) }
					subheader={ getDeviceStr( individual ) }
				/>
				<CardContent>
					selected { individual.lat }
				</CardContent>
			</Card>
}

/*
<pre>
						{ JSON.stringify( getIndividualById( selected ), null, 2 ) }
					</pre>
*/
