import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  error,
  animating,
} from "./actions"

export const skipIntroSlice = {
  open: true,
  animating: false,
  error: null,
}

const skipIntroReducer = createReducer( skipIntroSlice, {
  
  [animating]: (state, action) => {
    state.animating = action.animating
    return state
  },
    
  [open]: (state, action) => {
    state.open = action.open
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { skipIntroReducer }
