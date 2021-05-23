import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import {
    makeStyles,
    useTheme,
    Card,
    CardHeader,
    CardContent,
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
}))

export default function Host( props ) {
	
	const classes = useStyles() 
	const theme = useTheme()
	const primaryColor = theme.palette.primary.main

	const hostSlice = useSelector(state => state.host)
	const {
     	wpData,
    } = hostSlice
    const {
    	name,
    	description,
    } = wpData
    
	return	<Card className={ clsx( classes.host ) }>
				<CardHeader 
					avatar={ <Icon icon={ `wordpress` } color={ primaryColor } /> }
					title={ `WordPress` }
				/>
				<CardContent>
					<Typography variant={ `body1` } >
						{ `${name} ${description}` }
					</Typography>
				</CardContent>
			</Card>
}
