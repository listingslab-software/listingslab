import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  initted,
  restartAnimation,
} from "./actions"

export const layoutSlice = {
  error: null,
  initted: false,
  reset: false,
  restartAnimation: false,
}

const layoutReducer = createReducer( layoutSlice, {

  [restartAnimation]: (state, action) => {
    state.restartAnimation = action.restartAnimation
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
