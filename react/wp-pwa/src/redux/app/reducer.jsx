import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  overlay,
  client,
} from "./actions"

export const appSlice = {
  open: false,
  overlay: false,
  client: null,
  
}

const appReducer = createReducer( appSlice, {

  [client]: (state, action) => {
    state.client = action.client
    return state
  },
  
  [open]: (state, action) => {
    state.open = action.open
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

})

export { appReducer }
