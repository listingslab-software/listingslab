import { createAction } from '@reduxjs/toolkit'
import { getStore, getFStore } from '../../'
import { scrollToTop } from '../app/actions'

export const error = createAction(`INDIVIDUALS/ERROR`)
export const individuals = createAction(`INDIVIDUALS`)
export const subscribing = createAction(`INDIVIDUALS/SUBSCRIBING`)
export const subscribed = createAction(`INDIVIDUALS/SUBSCRIBED`)
export const selected = createAction(`INDIVIDUALS/SELECTED`)
export const defaultSelected = createAction(`INDIVIDUALS/SELECTED/DEFAULT`)
export const deleting = createAction(`INDIVIDUALS/DELETING`)

export const deleteIndividual = id => {
    const store = getStore()
    store.dispatch( {type: `INDIVIDUALS/DELETING`, deleting: true } )
    const db = getFStore()
    db.collection(`individuals`).doc( id )
        .delete()
        .then( function( res) {
            console.log ('Deleted.')
            store.dispatch( {type: `INDIVIDUALS/DELETING`, deleting: false } )
            setSelected( null )
            return true
        })
        .catch(function(error) {
            throwError( error )
            return false
        })
    return true
}

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

export const selectDefault = selected => {
    const store = getStore()
    store.dispatch({ type: `INDIVIDUALS/SELECTED/DEFAULT`, defaultSelected: true })
    store.dispatch({ type: `INDIVIDUALS/SELECTED`, selected })
    return true
}

export const getLocationStr = individual => {
    let fingerprint = individual.individual
    if ( !fingerprint ) return false
    const {
        countryName,
        city,
    } = individual
    return `${ city }, ${ countryName }`
}

export const getDeviceStr = individual => { 
    if ( !individual ) return false
    const {
        // osName,
        device,
        // browserName,
        // browserMajor,
    } = individual
    let deviceStr = `${ device }`
    return deviceStr
}

export const getBrowserSrc = individual => {
    const {
        browserName
    } = individual
    if ( !browserName ) return false

    const assetsDir = getStore().getState().host.wpData.assetsDir
    let b = `unknown`
    if ( browserName.toLowerCase().indexOf( `chrome` ) !== -1 ) b = `Chrome`
    if ( browserName.toLowerCase().indexOf( `edge` ) !== -1 ) b = `Edge`
    if ( browserName.toLowerCase().indexOf( `firefox` ) !== -1 ) b = `Firefox`
    if ( browserName.toLowerCase().indexOf( `safari` ) !== -1 ) b = `Safari`
    return `${assetsDir}/svg/browser/${b}.svg`
}

export const getFlagSrc = individual => {
    const assetsDir = getStore().getState().host.wpData.assetsDir
    const {
        countryCode2
    } = individual
    if ( !countryCode2 ) return ``
    return `${assetsDir}/svg/flags/${ countryCode2.toLowerCase() }.svg`
}

export const getIndividualById = id => { 
    const individuals = getStore().getState().individuals.individuals
    for ( let i = 0; i < individuals.length; i++ ){
        if ( individuals[i].id === id ) return individuals[i]
    }
    return false
}

export const setSelected = selected => { 
    scrollToTop()
    const store = getStore()
    store.dispatch({ type: `INDIVIDUALS/SELECTED`, selected })
    return true
}

export const throwError = error => { 
	const store = getStore()
	store.dispatch({type: `INDIVIDUALS/ERROR`, error})
	return true
}
