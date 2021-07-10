import { createAction } from '@reduxjs/toolkit'
import firebase from '@firebase/app'
import parseUa from 'ua-parser-js'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import axios from 'axios'
import { 
    getStore,
} from '../../'

import { openFeedback } from '../app/actions'

export const error = createAction(`LOCALIFY/ERROR`)
export const initting = createAction(`LOCALIFY/INITTING`)
export const initted = createAction(`LOCALIFY/INITTED`)
export const ting = createAction(`LOCALIFY/TING`)
export const id = createAction(`LOCALIFY/ID`)
export const individual = createAction(`LOCALIFY`)
export const gdpr = createAction(`LOCALIFY/GDPR`)

export const initLocalify = () => {
    const store = getStore()
    store.dispatch({ type: `LOCALIFY/INITTING`, initting: true })
    userAgent()
    updateTing(`host`, window.location.host)
    updateTing(`pathname`, window.location.pathname)
    fetchGeo()
    FingerprintJS.load().then(fp => {
          fp.get().then(result => {
              updateTing(`fingerprint`, `${ result.visitorId }` )
              completeInit()
          })
        })

    return true
}

export const completeInit = () => {
    const store = getStore()
    store.dispatch({ type: `LOCALIFY/INITTED`, initted: true })    
    store.dispatch({ type: `LOCALIFY/INITTING`, initting: true })    
    const ting = store.getState().localify.ting
    const {
        fingerprint,
        ip,
        host,
    } = ting
    if ( !fingerprint || !ip || !host) return false
    updateTing(`individual`, `${ host }_${ ip }_${ fingerprint }` )
    lookupIndividual()
    return true
}

export const getBrowserSrc = individual => {
    const assetsDir = getStore().getState().wordpress.pwaData.assetsDir
    const {
        browserName
    } = individual
    if ( !browserName ) return false
    let b = `unknown`

    if ( browserName.toLowerCase().indexOf( `chrome` ) !== -1 ) b = `Chrome`
    if ( browserName.toLowerCase().indexOf( `edge` ) !== -1 ) b = `Edge`
    if ( browserName.toLowerCase().indexOf( `firefox` ) !== -1 ) b = `Firefox`
    if ( browserName.toLowerCase().indexOf( `safari` ) !== -1 ) b = `Safari`

    return `${assetsDir}/svg/browser/${b}.svg`
}

export const getDeviceSrc = individual => {
    const {
        device
    } = individual
    if ( !device ) return false
    if ( device === `desktop` ) return `/svg/listingslab/ironavirus.svg` 
    return `/svg/device/iphone.svg`
}

export const getFlagSrc = individual => {
    const assetsDir = getStore().getState().wordpress.pwaData.assetsDir
    const {
        countryCode2
    } = individual
    if ( !countryCode2 ) return ``
    return `${assetsDir}/svg/flags/${ countryCode2.toLowerCase() }.svg`
}

export const updateIndividual = ( attribute, value ) => {
    const store = getStore()
    const { id } = store.getState().localify
    const db = firebase.firestore()
    db.collection(`individuals`).doc( id )
        .set({ [attribute]: value }, { merge: true })
        .then( function(response) {
            return true
        })
        .catch(function(error) {
            throwError( error )
            return false
        })
    return true    
}

export const subscribe = (id) => { 
    const store = getStore()
    const db = firebase.firestore()
    db.collection( `individuals` ).doc( id )
        .onSnapshot( ( doc )  => {
            store.dispatch({type: `LOCALIFY`, individual: doc.data() })
        })
    return true
}

export const lookupIndividual = () => { 
    const store = getStore()
    const ting = store.getState().localify.ting
    const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/individuals/`
    axios.post( endpoint, ting )
        .then(function( res ) {
            const store = getStore()
            const id = res.data.response.data.id
            store.dispatch({ type: `LOCALIFY/ID`, id })
            subscribe( id )
            return true
        })
        .catch(function( error ) {
            openFeedback({
                severity: `success`,
                message: `API not connected`,
            })
            throwError( error )
            return false
        })
}


export const userAgent = () => {
    const ua = parseUa()
    updateTing(`device`, ua.device.type ? `${ ua.device.vendor } ${ua.device.model}` : `Desktop` )
    updateTing(`osName`, ua.os.name)
    updateTing(`osVersion`, ua.os.version)
    updateTing(`browserName`, ua.browser.name)
    updateTing(`browserVersion`, ua.browser.version)
    updateTing(`browserMajor`, ua.browser.major)
    completeInit()
    return true
}

export const fetchGeo = () => { 
    const endpoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_API_IPGEO}`
    axios.get( endpoint )
        .then( function( response ) {
            const ipgeo = response.data
            updateTing(`callingCode`, ipgeo.calling_code)
            updateTing(`city`, ipgeo.city)
            updateTing(`continentCode`, ipgeo.continent_code)
            updateTing(`continentName`, ipgeo.continent_name)
            updateTing(`countryName`, ipgeo.country_name)
            updateTing(`countryCapital`, ipgeo.country_capital)
            updateTing(`countryCode2`, ipgeo.country_code2)
            updateTing(`countryCode3`, ipgeo.country_code3)
            updateTing(`countryTld`, ipgeo.country_tld)
            updateTing(`currencyCode`, ipgeo.currency ? ipgeo.currency.code : null)
            updateTing(`currencyName`, ipgeo.currency ? ipgeo.currency.name : null)
            updateTing(`currencySymbol`, ipgeo.currency ? ipgeo.currency.symbol : null)
            updateTing(`district`, ipgeo.district)
            updateTing(`geonameId`, ipgeo.geoname_id)
            updateTing(`ip`, ipgeo.ip)
            updateTing(`isEu`, ipgeo.is_eu)
            updateTing(`isp`, ipgeo.isp)
            updateTing(`languages`, ipgeo.languages)
            updateTing(`lat`, ipgeo.latitude)
            updateTing(`lng`, ipgeo.longitude)
            updateTing(`organization`, ipgeo.organization)
            updateTing(`stateProv`, ipgeo.state_prov)
            updateTing(`timeZone`, ipgeo.time_zone ? ipgeo.time_zone.name : null )
            updateTing(`zipcode`, ipgeo.zipcode)
            completeInit()
            return true
        })
        .catch(function( error ) { 
            throwError( error )
            return false
        })
    return true
}

export const updateTing = (key, value) => {
    const store = getStore()
    let ting = store.getState().localify.ting
    ting = {
        ...ting,
        [key]: value,
        updated: Date.now(),
    }
    store.dispatch({type: `LOCALIFY/TING`, ting })
    return true
}

export const getLocationStr = individual => {
    let fingerprint = individual.individual
    if ( !fingerprint ) return false
    const {
        countryName,
        city,
        district,
    } = individual
    return `${ city !== district ? `${city},` : `` } ${ countryName }`
}

export const getOSName = individual => { 
    if ( !individual ) return false
    const {
        osName,
    } = individual
    return `${ osName }`
}

export const getDeviceStr = individual => { 
    if ( !individual ) return false
    const {
        device,
        browserName,
    } = individual
    let deviceStr = `${browserName} ${ device }`
    return deviceStr
}

export const acceptGDPR = gdpr => { 
    const store = getStore()
    store.dispatch({type: `LOCALIFY/GDPR`, gdpr })
    // togglePwaOpen( false )
    return false
}

export const throwError = error => {
    const store = getStore()
    store.dispatch({type: `APP/ERROR`, error })
    return false
}