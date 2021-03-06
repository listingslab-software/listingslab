import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const error = createAction(`LAYOUT/ERROR`) 
export const initted = createAction(`LAYOUT/INITTED`)
export const restartAnimation = createAction(`LAYOUT/RESTART/ANIMATION`)

export const animationRestart = restartAnimation => {
	const store = getStore()
	store.dispatch({type: `LAYOUT/RESTART/ANIMATION`, restartAnimation })
	return true
}

export const animationInitted = initted => {
	const store = getStore()
	store.dispatch({type: `LAYOUT/INITTED`, initted })
	return true
}
