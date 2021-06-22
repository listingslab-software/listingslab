import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { 
	getStore,
} from '../../../'
export const open = createAction(`SKIPINTRO/OPEN`) 
export const error = createAction(`SKIPINTRO/ERROR`) 
export const initted = createAction(`SKIPINTRO/INITTED`) 
export const reset = createAction(`SKIPINTRO/RESET`)
export const posts = createAction(`SKIPINTRO/POSTS`)
export const postsLoading = createAction(`SKIPINTRO/POSTS/LOADING`)
export const postsLoaded = createAction(`SKIPINTRO/POSTS/LOADED`)

export const toggleSkipIntroOpen = open => {
	const store = getStore()
	store.dispatch({type: `SKIPINTRO/OPEN`, open })
	initAnimation( false )
	return true
}

export const initAnimation = initted => {
	const store = getStore()
	store.dispatch({type: `SKIPINTRO/INITTED`, initted })
	return true
}

export const resetAnimation = reset => {
	const store = getStore()
	store.dispatch({type: `SKIPINTRO/RESET`, reset })
	return true
}

export const loadPosts = url => {
	const store = getStore()
	store.dispatch({type: `SKIPINTRO/POSTS/LOADING`, postsLoading: true }) 
	axios.get( url )
		.then( function( res ) {
			const store = getStore()
			store.dispatch({type: `SKIPINTRO/POSTS/LOADING`, postsLoading: false })
			store.dispatch({type: `SKIPINTRO/POSTS/LOADED`, postsLoaded: true })
			// console.log ('res.data', res.data)
			return true
		})
		.catch(function( error ) {
			store.dispatch({type: `SKIPINTRO/POSTS/LOADING`, postsLoading: false })
			store.dispatch({type: `SKIPINTRO/POSTS/LOADED`, postsLoaded: true })
			store.dispatch({type: `SKIPINTRO/ERROR`, error })
			return false
		})
	return true
}



