import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Avatar,
    ListItemAvatar,
} from '@material-ui/core/'
// import { Icon } from '../theme'
import { 
	subscribe, 
	getDeviceStr, 
	// getLocationStr,
	getFlagSrc,
	setSelected,
	selectDefault,
} from '../redux/individuals/actions'

const useStyles = makeStyles(theme => ({
	individuals:{
		margin: theme.spacing(),
		boxShadow: 'none',
		border: '1px solid rgba(255,255,255,0.75)',
		background: 'rgba(255,255,255,0.25)',
	},
}))

export default function Individuals( props ) {
	
	const classes = useStyles() 
	const individualsSlice = useSelector(state => state.individuals)

	React.useEffect(() => {
		const {
			subscribing,
			subscribed,
			selected,
			defaultSelected,
			individuals,
		} = individualsSlice
		if (!subscribing && !subscribed) subscribe()
		if (individuals.length){
			if ( !selected && !defaultSelected){
				selectDefault (individuals[0].id)
			}
		}
	}, [ individualsSlice ])

 	let subheader = ``
 	const {
 		individuals,
 	} = individualsSlice
 	if ( individuals.length ) subheader = `Total: ${individuals.length}`

 	if ( !individuals.length ) return null

	return	<Card className={ clsx( classes.individuals ) }>
				<CardHeader 
					// avatar={ <Icon icon={ `individuals` } color={ `primary` } /> }
					title={ `Individuals` }
					subheader={ subheader }
					// action={ <Icon icon={ `close` } color={ `primary` } /> }
				/>
				<CardContent>
					<List dense>
						{ individuals.map ( (item, i) => {
							const {
								id
							} = item
							return <ListItem button key={ `individual_${i}` }
										onClick={ ( e ) => {
											e.preventDefault()
											setSelected( id )
										}}>
										<ListItemAvatar>
											<Avatar src={ getFlagSrc( item ) } />
										</ListItemAvatar>
										<ListItemText 
											primary={ item.fingerprint }
											// primary={ getLocationStr(item) }
											secondary={ getDeviceStr( item ) }
										/>
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