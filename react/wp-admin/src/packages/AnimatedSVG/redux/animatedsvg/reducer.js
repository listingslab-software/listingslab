import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  initted,
  pathname,
  scene,
} from './actions'

export const animatedsvgSlice = {
  error: null,
  initted: false,
  pathname: null,
  scene: null,
}

const animatedsvgReducer = createReducer(animatedsvgSlice, {

  [scene]: (state, action) => {
    state.scene = action.scene
    return state
  },

  [pathname]: (state, action) => {
    state.pathname = action.pathname
    return state
  },

  [initted]: (state, action) => {
    state.initted = action.initted
    return state
  },
  
  [error]: (state, action) => {
    state.error = action.error
    return state
  },
  
})

export { animatedsvgReducer }