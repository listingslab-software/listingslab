// import { getStore } from '../'
import moment from 'moment'

export const getTingPrimaryStr = ting => {
    if ( !ting ) return false
    const {
        host,
        path,
    } = ting
    let primaryStr = `${host ? `${host}` : `` }${ path && path !== `/` ? path : `` }`
    return primaryStr
}

export const getTingSubheading = ting => {
    if ( !ting ) return false
    let tingSubheading = `${ getTingGeoStr( ting )} ${ getTingDeviceStr( ting )}`
    return tingSubheading
}

export const getTingGeoStr = ting => {
    if ( !ting ) return false
    const {
        countryName,
        city,
    } = ting
    let geoStr = `${ countryName } ${ city !== countryName ? city : `` }`
    return geoStr
}

export const getTingTimeAgo = ting => {
    if ( !ting ) return false
    const {
        updated
    } = ting
    return moment(updated).fromNow()
}

export const getTingSecondaryStr = ting => {
    if ( !ting ) return false
    const {
        id
    } = ting
    return `id: ${ id }`
}

export const getTingDeviceStr = ting => {
    if ( !ting ) return false
    let deviceStr
    const {
        device,
        browserName,
    } = ting
    deviceStr = `${ browserName ? browserName : `` }`
    if ( device !== `undefined undefined` ) {
         deviceStr += ` ${ device ? device : `` }`
    }
    return deviceStr
}

export const getTingHost = ting => {
    if ( !ting ) return false
    const {
        host
    } = ting
    return host
}

export const getTingPage = ting => {
    if ( !ting ) return false
    const {
        path,
        docTitle,
    } = ting
    return `${ path } ${ docTitle }`
}
