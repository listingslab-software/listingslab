import { createAction } from '@reduxjs/toolkit'
import { getStore, getFStore } from '../../'

export const error = createAction(`INDIVIDUALS/ERROR`)
export const individuals = createAction(`INDIVIDUALS`)
export const subscribing = createAction(`INDIVIDUALS/SUBSCRIBING`)
export const subscribed = createAction(`INDIVIDUALS/SUBSCRIBED`)

export const subscribe = () => { 
	const store = getStore()
	store.dispatch( {type: `INDIVIDUALS/SUBSCRIBING`, subscribing: true } )
	const db = getFStore()
	db.collection( `individuals` )
		.orderBy( `updated`, `desc` )
		.onSnapshot(( snap ) => {
			const individuals = []
	        snap.forEach( data => {
	            individuals.push({
	            	id: data.id,
	            	...data.data(),
	            })
	        })
			store.dispatch( {type: `INDIVIDUALS`, individuals } )
			store.dispatch( {type: `INDIVIDUALS/SUBSCRIBED`, subscribed: true } )
			store.dispatch( {type: `INDIVIDUALS/SUBSCRIBING`, subscribing: false } )
			return true
	    })
}

export const throwError = error => { 
	const store = getStore()
	store.dispatch({type: `INDIVIDUALS/ERROR`, error})
	return true
}
