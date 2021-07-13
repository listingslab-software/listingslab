import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  nonPwaInitted,
  nonPwaInitting,
} from "./actions"

export const animationSlice = {
  error: null,
  nonPwaInitted: false,
  nonPwaInitting: false,
}

const animationReducer = createReducer( animationSlice, {
  
  [nonPwaInitted]: (state, action) => {
    state.nonPwaInitted = action.nonPwaInitted
    return state
  },

  [nonPwaInitting]: (state, action) => {
    state.nonPwaInitting = action.nonPwaInitting
    return state
  },
    
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { animationReducer }
