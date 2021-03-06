import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  individuals,
  subscribed,
  subscribing,
  selected,
  defaultSelected,
  deleting,
} from "./actions"


export const individualsSlice = {
  error: null,
  individuals: [],
  subscribing: false,
  subscribed: false,
  selected: null,
  defaultSelected: false,
  deleting: false,
}

const individualsReducer = createReducer( individualsSlice, {

  [deleting]: (state, action) => {
    state.deleting = action.deleting
    return state
  },

  [defaultSelected]: (state, action) => {
    state.defaultSelected = action.defaultSelected
    return state
  },

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
