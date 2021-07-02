import pJSON from '../package.json'
import React from 'react'
import firebase from '@firebase/app'
import '@firebase/firestore'
import ReactDOM from 'react-dom'
import App from './App'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import reduxStore from './redux'
import { 
    setClient, 
    toggleIsMobile 
} from './redux/app/actions'
import { resetAnimation } from './packages/SkipIntro/redux/actions'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

const fireConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
}

const addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return
    if (object.addEventListener) {
        object.addEventListener(type, callback, false)
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback)
    } else {
        object["on"+type] = callback
    }
}

addEvent(window, `resize`, function( event ) {
  setClient()
  resetAnimation( true )
  // set mobile
  toggleIsMobile ( document.documentElement.clientWidth < 500 ? true : false )
})

const fBase = firebase.initializeApp(fireConfig)
export const getFBase = () => { return fBase }

const fStore = firebase.firestore()
const getFStore = () => { return fStore }
export { getFStore }

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

const store = reduxStore()
export const getStore = () => { return store }

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById( 'pwa' )
)
