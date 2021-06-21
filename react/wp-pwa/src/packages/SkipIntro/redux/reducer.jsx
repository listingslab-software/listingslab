import { createReducer } from '@reduxjs/toolkit'
import {
  open,
  error,
  animating,
  restart,
  posts,
  postsLoading,
  postsLoaded,

} from "./actions"

export const skipIntroSlice = {
  open: true,
  animating: false,
  error: null,
  restart: false,
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

  [restart]: (state, action) => {
    state.restart = action.restart
    return state
  },

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
