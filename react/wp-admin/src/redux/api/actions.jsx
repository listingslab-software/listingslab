import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
import axios from 'axios'

export const error = createAction(`API/ERROR`)
export const apiOpen = createAction(`API/OPEN`)
export const fetching = createAction(`API/FETCHING`)
export const fetched = createAction(`API/FETCHED`)
// hostId

export const firstRunAPI = () => { 
	const store = getStore()
	store.dispatch({type: `API/FETCHING`, fetching: true })
	const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/hosts/first-runXXX`
	let hostPayload = {
		host: 1233,
		fingerprint: `xyx`
	}
	axios.post( endpoint, hostPayload )
		.then( function( res ) {
			const store = getStore()
			store.dispatch({type: `API/FETCHING`, fetching: false })
			store.dispatch({type: `API/FETCHED`, fetched: true })
			// console.log ('res.data.response.data', res.data.response.data)
			return true
		})
		.catch(function( error ) {
			store.dispatch({type: `API/FETCHING`, fetching: false })
			store.dispatch({type: `API/FETCHED`, fetched: true })
			throwError( error )
			return false
		})
	return false
}

export const toggleAPI = apiOpen => { 
	const store = getStore()
	store.dispatch({type: `API/OPEN`, apiOpen})
	return true
}

export const throwError = error => { 
	const store = getStore()
	store.dispatch({type: `API/ERROR`, error})
	return true
}
