import { createReducer } from '@reduxjs/toolkit'
import {
  pwaOpen,
  overlay,
  client,
  feedback,
  error,
  isMobile,
} from "./actions"

export const appSlice = {
  error: null,
  pwaOpen: true,
  overlay: false,
  client: null,
  feedback: null,
  isMobile: document.documentElement.clientWidth < 500 ? true : false,
}

const appReducer = createReducer( appSlice, {
  
  [isMobile]: (state, action) => {
    state.isMobile = action.isMobile
    return state
  },
  
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
  
  [pwaOpen]: (state, action) => {
    state.pwaOpen = action.pwaOpen
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

})

export { appReducer }
