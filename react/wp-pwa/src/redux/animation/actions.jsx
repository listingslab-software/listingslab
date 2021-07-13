import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
export const error = createAction(`ANIMATION/ERROR`) 
export const nonPwaInitting = createAction(`ANIMATION/INITTING`) 
export const nonPwaInitted = createAction(`ANIMATION/INITTED`) 

export const initNonPwa = () => {
	const store = getStore()
	store.dispatch({type: `ANIMATION/INITTING`, nonPwaInitting: true })
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `ANIMATION/ERROR`, error })
	return true
}
