import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    LinearProgress,
    Typography,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	host:{
		margin: theme.spacing(),
		border: '1px solid rgba(0,0,0,0.25)',
		boxShadow: 'none',
		borderRadius: 'none',
	},
	historyItem:{
		// border: '1px solid rgba(0,0,0,0.25)',
	},
	avatar: {
		height: 100,
		width: 100,
	},
}))

export default function API( props ) {
	
	const classes = useStyles() 
	const apiSlice = useSelector(state => state.api)
	const {
     	apiOpen,
     	fetching,
     	history,
    } = apiSlice
	if (!apiOpen) return null

	return	<Card className={ clsx( classes.host ) }>
				<CardHeader 
					avatar={ <Icon icon={ `api` } color={ `primary` } /> }
					title={ `API` }
				/>
				{ fetching ? <LinearProgress /> : null }
				<CardContent>
				<Typography variant={`body1`}>
					history
				</Typography>

				{ history.map(( item, i ) => {
					const { 
						message,
						time,
					} = item
					return <div 
								key={ `item_${i}` }
								className={ clsx( classes.historyItem ) }
							>
								<Typography variant={`body2`}>
									{time} { message }
								</Typography>
							</div>
				})}

				</CardContent>
			</Card>
}

/*
*/
