import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  error,
} from "./actions"

export const skipIntroSlice = {
  open: true,
  error: null,
}

const skipIntroReducer = createReducer( skipIntroSlice, {

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
