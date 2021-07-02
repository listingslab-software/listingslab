import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  initted,
  reset,
} from "./actions"

export const layoutSlice = {
  initted: false,
  error: null,
  reset: false,
}

const layoutReducer = createReducer( layoutSlice, {

  [reset]: (state, action) => {
    state.reset = action.reset
    return state
  },

  [initted]: (state, action) => {
    state.initted = action.initted
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { layoutReducer }
