import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../../'
export const open = createAction(`SKIPINTRO/OPEN`) 
export const error = createAction(`SKIPINTRO/ERROR`) 
export const animating = createAction(`SKIPINTRO/ANIMATING`) 


export const setAnimating = animating => {
	const store = getStore()
	store.dispatch({type: `SKIPINTRO/ANIMATING`, animating })
	return true
}

export const toggleSkipIntroOpen = open => {
	const store = getStore()
	store.dispatch({type: `SKIPINTRO/OPEN`, open })
	return true
}

