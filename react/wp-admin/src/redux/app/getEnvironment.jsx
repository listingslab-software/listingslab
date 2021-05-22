import pJSON from '../../../package.json'

export const localDev = {
    "url": "/",
    "avatar": "https://listingslab.com/listingslab_logo.png",
}

export const getEnvironment = () => {
	let environment = {
		version: pJSON.version,
		host: window.location.host,
		selectedHost: window.location.host,
	}
	let wpData = window.wpData
	if ( !wpData ) {
		return {
			...environment,
			...localDev,
			assetPath: `/`,
		}
	}
	return {
			...environment,
			...wpData,
			assetPath: `/wp-content/plugins/pingpong/react/wp-admin/build/`,
	}
}
