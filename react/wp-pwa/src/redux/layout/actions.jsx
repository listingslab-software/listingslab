import { createAction } from '@reduxjs/toolkit'
// import axios from 'axios'
import { 
	getStore,
} from '../../'

export const error = createAction(`LAYOUT/ERROR`) 
export const initted = createAction(`LAYOUT/INITTED`) 
export const reset = createAction(`LAYOUT/RESET`)

export const initAnimation = initted => {
	const store = getStore()
	store.dispatch({type: `LAYOUT/INITTED`, initted })
	return true
}

export const resetAnimation = reset => {
	const store = getStore()
	store.dispatch({type: `LAYOUT/RESET`, reset })
	return true
}

