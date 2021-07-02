import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  error,
  initted,
  reset,
  posts,
  postsLoading,
  postsLoaded,
} from "./actions"

export const skipIntroSlice = {
  open: true,
  initted: false,
  error: null,
  reset: false,
  posts: false,
  postsLoading: false,
  postsLoaded: false,
}

const skipIntroReducer = createReducer( skipIntroSlice, {
  
  [posts]: (state, action) => {
    state.posts = action.posts
    return state
  },

  [postsLoading]: (state, action) => {
    state.postsLoading = action.postsLoading
    return state
  },

  [postsLoaded]: (state, action) => {
    state.postsLoaded = action.postsLoaded
    return state
  },

  [reset]: (state, action) => {
    state.reset = action.reset
    return state
  },

  [initted]: (state, action) => {
    state.initted = action.initted
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
