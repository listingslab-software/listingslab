import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  api,
} from "./actions"

export const apiSlice = {
  pJSON,
  api: true,
}

const apiReducer = createReducer( apiSlice, {

  [api]: (state, action) => {
    state.api = action.api
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { apiReducer }
