import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
    makeStyles,
    Avatar,
    Button,
    Card,
    CardHeader,
    CardActions,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { 
	getIndividualById,
	getDeviceStr, 
	deleteIndividual,
	// getFlagSrc,
	getBrowserSrc,
} from '../redux/individuals/actions'

const useStyles = makeStyles(theme => ({
	individual:{
		padding: theme.spacing(),
		margin: theme.spacing(),
		border: '1px solid rgba(255,255,255,0.75)',
		background: 'rgba(255,255,255,0.5)',
		boxShadow: 'none',
	},
	btnTxt:{
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	}
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

 	const { id } = individual

	return	<Card className={ clsx( classes.individual ) }>
				
				<CardActions>
					<Button 
						color={ `secondary` }
						variant={ `outlined` }
						onClick={ ( e ) => {
							e.preventDefault()
							// console.log ('delete', id)
							deleteIndividual( id )
						}}>
						<Icon icon={ `delete` } />
						<span className={ clsx( classes.btnTxt ) }>
							Delete
						</span>
					</Button>
				</CardActions>
				<CardHeader 
					avatar={ <Avatar src={ getBrowserSrc( individual ) } /> }
					title={ individual.fingerprint }
					// title={ getLocationStr( individual ) }
					subheader={ getDeviceStr( individual ) }
				/>
			</Card>
}

/*
<pre>
						{ JSON.stringify( getIndividualById( selected ), null, 2 ) }
					</pre>
*/
