import { getStore } from '../'

const getIconByHostname = ( hostname ) => {
    let iconSrc = null
    const state = getStore().getState()
    const { sites } = state.visitors
    if ( !sites.length ) return iconSrc
    for ( let i = 0; i < sites.length; i ++ ){
        if (hostname === sites[i].hostname) iconSrc = sites[i].icon
    }
    return iconSrc
}

export default getIconByHostname