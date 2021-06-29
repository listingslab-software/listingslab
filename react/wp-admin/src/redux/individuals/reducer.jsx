import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  individuals,
  subscribed,
  subscribing,
  selected,
} from "./actions"


export const individualsSlice = {
  error: null,
  individuals: [],
  subscribing: false,
  subscribed: false,
  selected: null,
}

const individualsReducer = createReducer( individualsSlice, {

  [selected]: (state, action) => {
    state.selected = action.selected
    return state
  },
  
  [subscribing]: (state, action) => {
    state.subscribing = action.subscribing
    return state
  },

  [subscribed]: (state, action) => {
    state.subscribed = action.subscribed
    return state
  },

  [individuals]: (state, action) => {
    state.individuals = action.individuals
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { individualsReducer }
