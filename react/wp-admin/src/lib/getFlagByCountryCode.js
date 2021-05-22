import { getStore } from '../'

const getFlagByCountryCode = countryCode => {
    if ( !countryCode ) return false    
	const state = getStore().getState()
	const {
        environment,
    } = state.app
    const { assetPath } = environment
    return `${ assetPath }svg/flags/${ countryCode.toLowerCase() }.svg`
}

export default getFlagByCountryCode
