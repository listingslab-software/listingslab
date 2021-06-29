import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { 
	getIndividualById,
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

	return	<Card className={ clsx( classes.individuals ) }>
				<CardHeader 
					avatar={ <Icon icon={ `individual` } color={ `primary` } /> }
					title={ selected }
					// subheader={  }
					// action={ <Icon icon={ `close` } color={ `primary` } /> }
				/>
				<CardContent>

					<pre>
						{ JSON.stringify( getIndividualById( selected ), null, 2 ) }
					</pre>
				</CardContent>
			</Card>
}
