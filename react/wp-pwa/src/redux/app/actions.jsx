import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
export const error = createAction(`APP/ERROR`) 
export const terminalOpen = createAction(`APP/OPEN/TERMINAL`) 
export const pwaOpen = createAction(`APP/OPEN/PWA`) 
export const overlay = createAction(`APP/OVERLAY`) 
export const client = createAction(`APP/CLIENT`) 
export const feedback = createAction(`APP/FEEDBACK`) 
export const isMobile = createAction(`APP/MOBILE`) 

export const toggleTerminalOpen = terminalOpen => {
	const store = getStore()
	store.dispatch({type: `APP/OPEN/TERMINAL`, terminalOpen })
	return true
}

export const toggleIsMobile = isMobile => {
	const store = getStore()
	store.dispatch({type: `APP/MOBILE`, isMobile })
	return true
}

export const openFeedback = feedback => {
	const store = getStore()
	store.dispatch({type: `APP/FEEDBACK`, feedback })
	return true
}

export const closeFeedback = () => {
	const store = getStore()
	store.dispatch({type: `APP/FEEDBACK`, feedback: null })
	return true
}

export const setClient = () => {
	const store = getStore()
	let client = {
			w: document.documentElement.clientWidth,
			h: document.documentElement.clientHeight
	}
	store.dispatch({type: `APP/CLIENT`, client })
	return true
}

export const navigateTo = ( url, target ) => {
	window.open( url, target )
	if ( target === `_self`){
		toggleOverlay( true )
	}
	return true
}

export const togglePwaOpen = pwaOpen => {
	const store = getStore()
	store.dispatch({type: `APP/OPEN/PWA`, pwaOpen })
	return true
}

export const toggleOverlay = overlay => {
	const store = getStore()
	store.dispatch({type: `APP/OVERLAY`, overlay })
	return true
}
