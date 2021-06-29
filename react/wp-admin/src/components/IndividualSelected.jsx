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
	getLocationStr,
	getFlagSrc,
} from '../redux/individuals/actions'

const useStyles = makeStyles(theme => ({
	individuals:{
		// margin: theme.spacing(),
		// border: '1px solid rgba(0,0,0,0.25)',
		boxShadow: 'none',
		borderRadius: 0,
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

	return	<Card className={ clsx( classes.individuals ) }>
				<CardHeader 
					avatar={ <Avatar src={ getFlagSrc( individual ) } /> }
					title={ getLocationStr( individual ) }
					subheader={ getDeviceStr( individual ) }
				/>
				<CardContent>
					
				</CardContent>
			</Card>
}

/*
<pre>
						{ JSON.stringify( getIndividualById( selected ), null, 2 ) }
					</pre>
*/
