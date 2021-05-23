import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  debug,
} from "./actions"

export const appSlice = {
  pJSON,
  debug: false,
  error: null,
}

const appReducer = createReducer( appSlice, {

  [debug]: (state, action) => {
    state.debug = action.debug
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }
