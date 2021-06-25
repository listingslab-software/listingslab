import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  overlay,
  client,
  feedback,
  error,
} from "./actions"

export const appSlice = {
  error: null,
  open: false,
  overlay: false,
  client: null,
  feedback: null,
}

const appReducer = createReducer( appSlice, {
  
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

  [feedback]: (state, action) => {
    state.feedback = action.feedback
    return state
  },

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
