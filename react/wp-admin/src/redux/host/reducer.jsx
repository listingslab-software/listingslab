// import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"


let wpData = {
	name: 'Local Dev',
	description: `Tagline`,
}
if ( window.wpData ){
	wpData = window.wpData
}

export const hostSlice = {
  error: null,
  wpData,
}

const hostReducer = createReducer( hostSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { hostReducer }