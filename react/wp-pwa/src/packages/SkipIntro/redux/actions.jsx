import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../../'
export const open = createAction(`SKIPINTRO/OPEN`) 
export const error = createAction(`SKIPINTRO/ERROR`) 

export const toggleOpen = open => {
	const store = getStore()
	store.dispatch({type: `SKIPINTRO/OPEN`, open })
	return true
}

