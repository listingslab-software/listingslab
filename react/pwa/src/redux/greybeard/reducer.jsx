import { createReducer } from '@reduxjs/toolkit'
import {
  open,
} from "./actions"

export const greybeardSlice = {
  open: false,
}

const greybeardReducer = createReducer( greybeardSlice, {

  [open]: (state, action) => {
    state.open = action.open
    return state
  },

})

export { greybeardReducer }
