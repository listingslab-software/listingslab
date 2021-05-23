import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Typography,
    Grid,
} from '@material-ui/core/'
import { 
	Host,
	Debugger,
} from './'

const useStyles = makeStyles(theme => ({
	appShell:{
		background: 'white',
		borderRadius: theme.spacing( 0.5 ),
		// border: '1px solid rgba(0,0,0,0.25)',
		padding: theme.spacing( 2 ),
		marginTop: theme.spacing( 2 ),
		marginRight: theme.spacing( 2 ),
	},
	title:{
		marginBottom: theme.spacing( 2 ),
		fontWeight: 'lighter',
		// borderBottom: '1px solid rgba(0,0,0,0.15)',
		paddingBottom: theme.spacing( 2 ),
		textAlign: 'center',
	},
}))

export default function AppShell( props ) {
	
	const classes = useStyles() 

	return	<React.Fragment>
				<div className={ clsx( classes.appShell ) } >
					
					<Grid container>
						<Grid item xs={ 12 }>
							<Typography 
								variant={ `h4` }
								className={ clsx( classes.title ) }>
								@listingslab plugin
							</Typography>
						</Grid>

						<Grid item xs={ 6 }>
							<Debugger />
						</Grid>

						<Grid item xs={ 6 }>
							<Host />
						</Grid>

					</Grid>
					
				</div>
			</React.Fragment>
}
