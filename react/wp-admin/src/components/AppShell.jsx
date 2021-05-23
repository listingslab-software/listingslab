import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    ButtonBase,
    // Avatar,
    Card,
    // CardHeader,
    // CardContent,
    // Badge,
    Typography,
} from '@material-ui/core/'
import { Host } from './'

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
	btn:{
		width: '100%',
		display: 'block',
		textAlign: 'left',
	},
	card: {
		background: 'none',
	    boxRadius: 'none',
	    boxShadow: 'none',
	    border: 'none',
	},

}))

export default function AppShell( props ) {
	
	const classes = useStyles() 

	return	<React.Fragment>
				<div className={ clsx( classes.appShell ) } >
					<Typography 
						variant={ `h4` }
						className={ clsx( classes.title ) }
					>
						@listingslab plugin
					</Typography>
					<ButtonBase 
						color={ `primary` }
						className={ clsx( classes.btn ) } 
						onClick={ (e) => {
							e.preventDefault()
						}}>
						<Card className={ clsx( classes.card ) } >
							<Host />
						</Card>
					</ButtonBase>
				</div>
			</React.Fragment>
}

/*

<CardHeader 
								title={ `Messages` }
								subheader={ `将react app添加到WordPress管理页面` }
								avatar={<Badge 
											color={ `secondary` }
											badgeContent={ 1 } >
											<Avatar src={ `http://localhost:8888/logo.png` }/>
										</Badge>}
							/>
<CardContent>
						<Typography variant={ `body2` }>
							{ `body` }
						</Typography>
					</CardContent>
*/