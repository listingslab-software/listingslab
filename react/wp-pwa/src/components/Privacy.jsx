import React from 'react'
import clsx from 'clsx' 
import { useSelector } from 'react-redux' 
import {
  acceptGDPR,
  gotoURL,
  togglePrivacyOpen,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    CardHeader,
    Button,
    Link,
    CardActions,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@material-ui/core/' 
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles( theme => ({
	messageBox: {
	},
	plainAccordion: {
		// boxShadow: 'none',
		width: '100%',
	},
	link:{
  		fontWeight: 'bold',
  		cursor: 'pointer',
  	},
	btnTxt: {
		color: 'white',
	},
	grow: {
		flexGrow: 1,
	},
	blockify: {
		display: 'block',
	}
}))

export default function Privacy( props ) {
	
	const classes = useStyles()
	const pingpongSlice = useSelector(state => state.pingpong)
    const {
		ting,
		privacyOpen,
	} = pingpongSlice
	const { 
		gdpr,
	} = ting
	const wordpressSlice = useSelector(state => state.wordpress)
	const {
		environment,
	} = wordpressSlice
	const { privacyUrl } = environment.blogInfo

	// 


	React.useEffect(() => {
        const {
          ting,
          privacyOpen,
        } = pingpongSlice 
        const { 
          gdpr,
        } = ting

        if ( gdpr !== undefined){
        	if (!gdpr && !privacyOpen){
        		togglePrivacyOpen( true )
        	}
        }
    }, [pingpongSlice])

	return	<div className={clsx( classes.messageBox )}>		
				<Accordion 
					onClick={ (e) => {
						e.preventDefault()
						togglePrivacyOpen( !privacyOpen )
					}}
					expanded={ privacyOpen }
					className={clsx( classes.plainAccordion )}>
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `privacy` } >
				        <CardHeader 
							avatar={ <Icon icon={ `gdpr` } /> }
							title={ `Privacy` }
							// subheader={ gdpr ? `agreed` : `not agreed` }
						/>
        			</AccordionSummary>
        			
        			<AccordionDetails className={ clsx ( classes.blockify) }>
						<CardActions>
							<Typography>
								{ gdpr ? `You have freely given ` : `Do you freely give ` } 
								your informed, unambiguous and specific consent to 
						        	our <Link 
						        		className={clsx( classes.link )}
						        		onClick={ (e) => {
						        			e.preventDefault()
						        			if ( privacyUrl ) gotoURL( privacyUrl, `_self` )
						        			
						        		}}> privacy policy</Link>?
							</Typography>
							<div className={ clsx ( classes.grow) } />
								{ gdpr ? <Button 
									color={ `primary` }
									variant={ `contained` }
									onClick={ (e) => {
										e.preventDefault()
										togglePrivacyOpen( false )
										acceptGDPR( false )
										
									}}>
									Forget Me
									</Button> : <Button 
									color={ `primary` }
									variant={ `contained` }
									onClick={ (e) => {
										e.preventDefault()
										togglePrivacyOpen( false )
										acceptGDPR( true )
									}}>
									Yes
								</Button> }
						</CardActions>
					</AccordionDetails>
				</Accordion>
			</div>
}