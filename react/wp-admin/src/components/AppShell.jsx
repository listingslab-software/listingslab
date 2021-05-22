import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    ButtonBase,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Badge,
    Typography,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
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

	return	<ButtonBase 
				color={ `primary` }
				className={ clsx( classes.btn ) } 
				onClick={ (e) => {
					e.preventDefault()
				}}>
				<Card className={ clsx( classes.card ) } >
					<CardHeader 
						title={ `from ${ `name` }` }
						subheader={ `subject` }
						avatar={<Badge 
									color={ `secondary` }
									badgeContent={ 2 } >
									<Avatar src={ `` }/>
								</Badge>}
					/>
					<CardContent>
						<Typography variant={ `body2` }>
							{ `body` }
						</Typography>
					</CardContent>
				</Card>
			</ButtonBase>
}
