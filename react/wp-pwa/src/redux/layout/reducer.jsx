import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  initted,
} from "./actions"

export const layoutSlice = {
  error: null,
  initted: false,
  reset: false,
}

const layoutReducer = createReducer( layoutSlice, {

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
