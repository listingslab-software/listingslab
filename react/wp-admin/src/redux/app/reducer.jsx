import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import { getEnvironment } from './getEnvironment'
import {
  error,
  appMenuOpen,
  fullScreen,
  themeMode,
  overlay,
  feedback,
  feedbackObj,
} from "./actions"

export const appSlice = {
  pJSON,
  error: null,
  environment: getEnvironment(),
  overlay: false,
  fullScreen: false,
  appMenuOpen: false,
  themeMode: `light`,
  feedback: false,
  feedbackObj: {},
}

const appReducer = createReducer(appSlice, {

  [feedbackObj]: (state, action) => {
    state.feedbackObj = action.feedbackObj
    return state
  },

  [feedback]: (state, action) => {
    state.feedback = action.feedback
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

  [themeMode]: (state, action) => {
    state.themeMode = action.themeMode
    return state
  },

  [fullScreen]: (state, action) => {
    state.fullScreen = action.fullScreen
    return state
  },

  [appMenuOpen]: (state, action) => {
    state.appMenuOpen = action.appMenuOpen
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }