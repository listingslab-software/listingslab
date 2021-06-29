import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    Typography,
    List,
    ListItem,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { subscribe } from '../redux/individuals/actions'

const useStyles = makeStyles(theme => ({
	individuals:{
		// margin: theme.spacing(),
		// border: '1px solid rgba(0,0,0,0.25)',
		boxShadow: 'none',
		borderRadius: 0,
	},
}))

export default function Individuals( props ) {
	
	const classes = useStyles() 
	const individualsSlice = useSelector(state => state.individuals)

	React.useEffect(() => {
		const {
			subscribing,
			subscribed,
		} = individualsSlice
		if (!subscribing && !subscribed) subscribe()
	}, [ individualsSlice ])

 	let subheader = `loading...`
 	const {
 		individuals,
 	} = individualsSlice
 	if ( individuals.length ) subheader = `Total: ${individuals.length}`

	return	<Card className={ clsx( classes.individuals ) }>
				<CardHeader 
					avatar={ <Icon icon={ `account` } color={ `primary` } /> }
					title={ `Individuals` }
					subheader={ subheader }
					action={ <Icon icon={ `close` } color={ `primary` } /> }
				/>
				<CardContent>
					<List dense>
						{ individuals.map ( (item, i) => {
							const {
								id
							} = item
							return <ListItem button key={ `individual_${i}` }>
										<Typography>
											{ id }
										</Typography>
									</ListItem>
						})}
					</List>
				</CardContent>
			</Card>
}





/*
<pre>
						{ JSON.stringify( individualsSlice, null, 2) }
					</pre>
*/