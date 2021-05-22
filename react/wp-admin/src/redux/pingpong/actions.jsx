import { createAction } from '@reduxjs/toolkit'
import firebase from '@firebase/app'
import { getStore, getFStore } from '../../'
import { scrollToTop } from '../../lib'
import { 
	setFeedback,
	toggleFeedback,
} from '../app/actions'

export const error = createAction(`PINGPONG/ERROR`)
export const tings = createAction(`PINGPONG/TINGS`)
export const messages = createAction(`PINGPONG/MESSAGES`)
export const subscribedTings = createAction(`PINGPONG/TINGS/SUBSCRIBED`)
export const subscribingTings = createAction(`PINGPONG/TINGS/SUBSCRIBING`)
export const showHost = createAction(`PINGPONG/TINGS/SHOWHOST`)
export const showId = createAction(`PINGPONG/TINGS/SHOWID`)
export const showBrowser = createAction(`PINGPONG/TINGS/SHOWBROWSER`)
export const tingId = createAction(`PINGPONG/TINGS/SELECT`)
export const showCountryName = createAction(`PINGPONG/TINGS/SHOWCOUNTRY`)
export const showMode = createAction(`PINGPONG/TINGS/SHOWMODE`)
export const selectedHost = createAction(`PINGPONG/HOST/SELECT`)
export const openedFirst = createAction(`PINGPONG/OPEN/FIRST`)
export const expandedAccordians = createAction(`PINGPONG/ACCORDIAN/TOGGLE`)
export const showTingFilters = createAction(`PINGPONG/TINGS/FILTERS`)

export const toggleTingFilters = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/FILTERS`, showTingFilters: bool })
	return true
}

export const deleteTing = id => {
	const db = getFStore()
	db.collection( `pingpong` ).doc( id  ).delete().then(() => {
		// console.log( 'deleteTing', id )
	    setFeedback({ 
			severity: `info`, 
			message: `Deleted OK`,
		})
	    toggleFeedback(true)
	    return true
	}).catch((error) => {
	    setFeedback({ 
			severity: `error`, 
			message: `Error deleting`,
		})
	    return false
	})
}

export const toggleWatching = ( tingId, bool ) => { 
	updateTingAttribute( tingId, `watching`, bool )
	return true
}

export const updateTingAttribute = (tingId, attribute, value) => {
	if ( !tingId ) return false
	const store = getStore()
	const db = firebase.firestore()
	db.collection(`pingpong`).doc( tingId )
		.set({ [attribute]: value }, { merge: true })
		.then(function(response) {
			// console.log ('Updated ', attribute)
			return true
		})
		.catch(function(error) {
			store.dispatch({type: `PINGPONG/ERROR`, error })
			return false
		})
	return true	
}

export const toggleAccordian = accordian => {
	const store = getStore()
	const pingpongSlice = store.getState().pingpong
	const { expandedAccordians } = pingpongSlice
	let newExpanded = {
		...expandedAccordians,
	}
	newExpanded[accordian] = !expandedAccordians[accordian]
	store.dispatch({type: `PINGPONG/ACCORDIAN/TOGGLE`, expandedAccordians: newExpanded })
	return true
}

export const openFirst = () => {
	const store = getStore()
	const pingpongSlice = store.getState().pingpong
	const { tings } = pingpongSlice
	if ( !tings[0] ) return false
	const {
		id
	} = tings[0]
	selectTing( id )
	store.dispatch({type: `PINGPONG/OPEN/FIRST`, openedFirst: true })
	return true
}

export const selectTing = tingId => {
	scrollToTop()
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SELECT`, tingId })
	return true
}

export const selectHost = selectedHost => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/HOST/SELECT`, selectedHost })
	selectTing( null )
	return true
}

export const getHostList = () => {
	const pingpongSlice = getStore().getState().pingpong
	const { tings } = pingpongSlice
	let hostList = []
	for ( let i = 0; i < tings.length; i ++ ){
		const { host } = tings[ i ]
		let exists = false
		for ( let j = 0; j < hostList.length; j ++ ){
			if ( hostList[ j ].host === host ){
				exists = true
			}
		}
		if ( !exists ) hostList.push( {host} )
	}
	return hostList
}

export const setShowMode = showMode => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SHOWMODE`, showMode })
	return true
}

export const toggleShowCountryName = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SHOWCOUNTRY`, showCountryName: bool })
	return true
}

export const getTingFromId = tingId => {
	const pingpongSlice = getStore().getState().pingpong
	const { tings } = pingpongSlice
	for (let i = 0; i < tings.length; i++ ){
		if (tings[i].id === tingId) return tings[i]
	}
	return false
}

export const toggleShowBrowser = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SHOWBROWSER`, showBrowser: bool })
	return true
}

export const toggleShowHost = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SHOWHOST`, showHost: bool })
	return true
}

export const toggleShowId = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SHOWID`, showId: bool })
	return true
}

export const subscribeTings = () => { 
	const store = getStore()
	store.dispatch( {type: `PINGPONG/TINGS/SUBSCRIBING`, subscribingTings: true } )
	const db = getFStore()
	db.collection( `pingpong` )
		.orderBy( `updated`, `desc` )
		.onSnapshot((querySnapshot) => {
			const tings = []
	        querySnapshot.forEach( data => {
	            tings.push({
	            	id: data.id,
	            	...data.data(),
	            })
	        })
			store.dispatch( {type: `PINGPONG/TINGS`, tings } )
			store.dispatch( {type: `PINGPONG/TINGS/SUBSCRIBED`, subscribedTings: true } )
			store.dispatch( {type: `PINGPONG/TINGS/SUBSCRIBING`, subscribingTings: false } )
			return true
	    })
}

export const throwError = error => { 
	const store = getStore()
	store.dispatch({type: `PINGPONG/OVERLAY`, error})
	return true
}
