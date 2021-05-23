import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import { 
	toggleOpen,
} from '../redux/greybeard/actions'
import {
	makeStyles,
	useTheme,
	Avatar,
	Card,
	CardHeader,
    Dialog,
    DialogContent,
    IconButton,
    Grid, 
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'
import { 
	WordpressMenu,
	Collapsing, 
	SettingsMenu, 
} from '../components'
// import { AnimatedSVG } from '../animation'

const useStyles = makeStyles((theme) => ({
  greyBeardDialog:{
  	background: 'none',
  },
  rightCol:{
  	marginTop: theme.spacing(3),
  },
  closeTrigger: {
  	zIndex:123456,
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    background: 'white',
  },
  hTag: {
  	fontWeight: 'lighter',
  },
  grow: {
  	flexGrow: 1,
  }
}))

export default function GreyBeardDialog( props ) {

	const classes = useStyles() 	
	const theme = useTheme()
	const primaryColor = theme.palette.primary.main
	const greybeardSlice = useSelector(state => state.greybeard)
	const {
     	open,
    } = greybeardSlice
	
	let wpSiteTitle = `Title`
	let wpSiteTagline = `Tagline`
	let wpSiteAvatar = `/logo192.png`

	if ( open ){
		return	<Dialog
					open={ open }
					className={ clsx( classes.greyBeardDialog )}
					fullWidth
					fullScreen
					maxWidth={ `sm` }
					onClose={ () => {  }}>
				<DialogContent>
					<div>
						<Grid container>
							<Grid item xs={ 12 } sm={ 6 } md={ 9 } >
									<CardHeader 
										title={ wpSiteTitle }
										subheader={ wpSiteTagline }
										avatar={ <IconButton
													onClick={ (e) => {
														e.preventDefault()
														console.log ('go home')
													}}>
													<Avatar src={ wpSiteAvatar } />
												</IconButton> }/>
			                </Grid>

			                <Grid item xs={ 12 } sm={ 6 } md={ 3 } className={ clsx( classes.rightCol )}>
				                <Card>
					                
					                <Collapsing options={{
					                	title: `WordPress`,
					                	icon: `wordpress`,
					                	iconColor: primaryColor,
					                }}>
					                	<WordpressMenu />
					                </Collapsing>

					                <Collapsing options={{
					                	title: `Settings`,
					                	icon: `settings`,
					                	iconColor: `primary`,
					                }}>
					                	<SettingsMenu />
					                </Collapsing>
				                </Card>
			                </Grid>
			                
		                </Grid>
		                
						<IconButton
							className={ clsx( classes.closeTrigger )}
		        			variant={ `text` }
		        			color={ `primary` }
		        			onClick={ (e) => {
		        				e.preventDefault()
		        				toggleOpen( false )
		        			}}>
		        			<Icon icon={ `oldskool` } color={ `inherit` } />				
						</IconButton>
					</div>
					<div className={ clsx( classes.grow )} />
				</DialogContent>
			</Dialog>


	}	

				return <IconButton
							className={ clsx( classes.closeTrigger )}
		        			variant={ `text` }
		        			color={ `primary` }
		        			onClick={ (e) => {
		        				e.preventDefault()
		        				toggleOpen( true )
		        			}}>
		        			<Icon icon={ `pwa` } color={ `inherit` } />				
						</IconButton>
	
}
