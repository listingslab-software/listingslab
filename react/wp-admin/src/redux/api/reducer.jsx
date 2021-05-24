import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  apiOpen,
  fetching,
  fetched,
} from "./actions"

export const apiSlice = {
  error: null,
  apiOpen: true,
  fetching: false,
  fetched: false,
  history: [
    {
      time: Date.now(),
      status: `success`,
      message: `PWA Booting up`,
    }
  ],
}

const apiReducer = createReducer( apiSlice, {

  [fetched]: (state, action) => {
    state.fetched = action.fetched
    return state
  },

  [fetching]: (state, action) => {
    state.fetching = action.fetching
    return state
  },

  [apiOpen]: (state, action) => {
    state.apiOpen = action.apiOpen
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { apiReducer }
