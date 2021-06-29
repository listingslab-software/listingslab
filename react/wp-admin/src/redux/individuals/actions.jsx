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


export const getDeviceSrc = individual => {
    const {
        device
    } = individual
    if ( !device ) return false
    if ( device === `desktop` ) return `/svg/listingslab/ironavirus.svg` 
    return `/svg/device/iphone.svg`
}

export const getLocationStr = individual => {
    let fingerprint = individual.individual
    if ( !fingerprint ) return false
    const {
        countryName,
        city,
        district,
    } = individual
    return `${ district }, ${ city !== district ? `${city},` : `` } ${ countryName }`
}

export const getFlagSrc = individual => {
    const {
        countryCode2
    } = individual
    if ( !countryCode2 ) return ``
    return `/svg/flags/${ countryCode2.toLowerCase() }.svg`
}

export const getDeviceStr = individual => { 
    if ( !individual ) return false
    const {
        osName,
        device,
        browserName,
        browserMajor,
    } = individual
    let deviceStr = `${ osName } ${browserName} ${browserMajor} ${ device }`
    return deviceStr
}

export const getBrowserSrc = individual => {
    const {
        browserName
    } = individual
    if ( !browserName ) return false
    return `/svg/thirdParty/listingslab.svg`
}



export const throwError = error => { 
	const store = getStore()
	store.dispatch({type: `INDIVIDUALS/ERROR`, error})
	return true
}
