import pJSON from '../../../package.json'
import { createAction } from '@reduxjs/toolkit'

export const getEnvironment = () => {
	let environment = {
		version: pJSON.version,
		host: window.location.host,
	}
	let wpData = window.wpData
	if ( !wpData ) {
		return {
			...environment,
		}
	}
	return {
			...environment,
			...wpData,
	}
}

export const error = createAction(`HOST/ERROR`)
