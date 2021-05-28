import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
import axios from 'axios'

export const error = createAction(`API/ERROR`)
export const apiOpen = createAction(`API/OPEN`)
export const fetching = createAction(`API/FETCHING`)
export const fetched = createAction(`API/FETCHED`)


export const firstRunAPI = () => { 
	const store = getStore()
	const wpData = store.getState().host.wpData
	store.dispatch({type: `API/FETCHING`, fetching: true })
	const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/hosts/first-run`
	axios.post( endpoint, wpData )
		.then( function( res ) {
			const store = getStore()
			store.dispatch({type: `API/FETCHING`, fetching: false })
			store.dispatch({type: `API/FETCHED`, fetched: true })
			// console.log ('response.data', res.data.response.data)
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
