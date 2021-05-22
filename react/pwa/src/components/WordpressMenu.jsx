import React from 'react'
import clsx from 'clsx'
import {
	makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  wordpressMenu:{
  },
  dialogTitle:{
	// marginTop: theme.spacing(2),
  },
  hTag: {
  	fontWeight: 'lighter',
  },
  title:{
  	padding: theme.spacing(2),
  	fontWeight: 'normal',
  },
  titleTxt:{
	marginLeft: theme.spacing(4),
  },
  closeTrigger: {
    position: 'absolute',
    right: theme.spacing(),
    bottom: theme.spacing(),
    background: 'white',
  },
    pingpongTrigger: {
    position: 'absolute',
    right: 55 + theme.spacing(),
    textTransform: 'none',
    background: 'white',
  },
}))

export default function WordpressMenu( props ) {

	const classes = useStyles() 	

	return	<div className={ clsx( classes.wordpressMenu )} >
				<List>
					<ListItem 
						button
						onClick={ (e) => { 
							e.preventDefault()
							// gotoURL(`/wp-admin/`, `_self`)
						}}>
						<ListItemAvatar>
							<Icon icon={ `dashboard` } color={ `primary` } />
						</ListItemAvatar>
						<ListItemText 
							primary={ `Dashboard` }
						/>
					</ListItem>

					<ListItem 
						button
						onClick={ (e) => { 
							e.preventDefault()
							// gotoURL(`/wp-admin/admin.php?page=greybeard%2Fphp%2FGreyBeard.php`, `_self`)
						}}>
						<ListItemAvatar>
							<Icon icon={ `greybeard` } color={ `primary` } />
						</ListItemAvatar>
						<ListItemText 
							primary={ `@GreyBeard` }
						/>
					</ListItem>

					<ListItem 
						button
						onClick={ (e) => { 
							e.preventDefault()
							// gotoURL(`/wp-admin/customize.php?return=%2Fwp-admin%2Fadmin.php%3Fpage%3Dgreybeard%252Fphp%252FGreyBeard.php`, `_self`)
						}}>
						<ListItemAvatar>
							<Icon icon={ `theme` } color={ `primary` } />
						</ListItemAvatar>
						<ListItemText 
							primary={ `Customise Theme` }
						/>
					</ListItem>

					<ListItem 	
						button
						onClick={ e => {
							e.preventDefault()
							// gotoURL(`/wp-admin/plugins.php`, `_self`)
						}}>
						<ListItemAvatar>
							<Icon icon={ `plugins` } color={ `primary` } />
						</ListItemAvatar>
						<ListItemText 
							primary={ `Plugins` }
						/>
					</ListItem>

					<ListItem 
						button
						onClick={ (e) => { 
							e.preventDefault()
							// gotoURL(`/wp-admin/post-new.php`, `_self`)
						}}>
						<ListItemAvatar>
							<Icon icon={ `create` } color={ `primary` } />
						</ListItemAvatar>
						<ListItemText 
							primary={ `New Post` }
						/>
					</ListItem>



				</List>

				</div>
}
