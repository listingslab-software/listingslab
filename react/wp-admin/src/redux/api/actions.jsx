import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'

export const error = createAction(`API/ERROR`)
export const api = createAction(`API/API`)

export const toggleAPI = api => { 
	const store = getStore()
	store.dispatch({type: `API/OPEN`, api})
	return true
}

export const throwError = error => { 
	const store = getStore()
	store.dispatch({type: `API/ERROR`, error})
	return true
}
