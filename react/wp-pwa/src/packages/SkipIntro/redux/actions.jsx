import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { 
	getStore,
} from '../../../'
export const open = createAction(`SKIPINTRO/OPEN`) 
export const error = createAction(`SKIPINTRO/ERROR`) 
export const animating = createAction(`SKIPINTRO/ANIMATING`) 
export const restart = createAction(`SKIPINTRO/RESTART`)

export const posts = createAction(`SKIPINTRO/POSTS`)
export const postsLoading = createAction(`SKIPINTRO/POSTS/LOADING`)
export const postsLoaded = createAction(`SKIPINTRO/POSTS/LOADED`)

export const loadPosts = url => {
	console.log ('loadPosts')

	const store = getStore()
	store.dispatch({type: `SKIPINTRO/POSTS/LOADING`, postsLoading: true }) 


	axios.get( url )
		.then( function( res ) {
			const store = getStore()
			store.dispatch({type: `SKIPINTRO/POSTS/LOADING`, postsLoading: false })
			store.dispatch({type: `SKIPINTRO/POSTS/LOADED`, postsLoaded: true })
			console.log ('response.data', res.data)
			return true
		})
		.catch(function( error ) {
			console.log ('error', error)
			store.dispatch({type: `SKIPINTRO/POSTS/LOADING`, postsLoading: false })
			store.dispatch({type: `SKIPINTRO/POSTS/LOADED`, postsLoaded: true })
			return false
		})


	return true
}

export const restartAnimation = restart => {
	const store = getStore()
	store.dispatch({type: `SKIPINTRO/RESTART`, restart })
	return true
}

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

