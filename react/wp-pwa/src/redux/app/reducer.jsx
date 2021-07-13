import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  pwaOpen,
  terminalOpen,
  overlay,
  client,
  feedback,
  isMobile,
} from "./actions"

export const appSlice = {
  error: null,
  pwaOpen: false,
  terminalOpen: false,
  overlay: false,
  client: null,
  feedback: null,
  isMobile: document.documentElement.clientWidth < 500 ? true : false,
}

const appReducer = createReducer( appSlice, {
  
  [terminalOpen]: (state, action) => {
    state.terminalOpen = action.terminalOpen
    return state
  },
  
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
