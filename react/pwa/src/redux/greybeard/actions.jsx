import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
// greybeard
export const open = createAction(`GREYBEARD/OPEN`) 

export const toggleOpen = open => {
	const store = getStore()
	store.dispatch({type: `GREYBEARD/OPEN`, open })
	return true
}
