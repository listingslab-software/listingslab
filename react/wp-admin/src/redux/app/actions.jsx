import { createAction } from '@reduxjs/toolkit'
import { getStore, getHistory } from '../../'

export const error = createAction(`APP/ERROR`)
export const path = createAction(`APP/PATH`)
export const debug = createAction(`APP/DEBUG`)


export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`
    })
    return true
}


export const toggleDebug = debug => { 
	const store = getStore()
	store.dispatch({type: `APP/DEBUG`, debug})
	return true
}

export const changePath = path => {
	const store = getStore()
	const history = getHistory()
	store.dispatch({type: `APP/PATH`, path })
	history.push( path )
	window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return true
}

export const throwError = error => { 
	const store = getStore()
	store.dispatch({type: `APP/ERROR`, error})
	return true
}


