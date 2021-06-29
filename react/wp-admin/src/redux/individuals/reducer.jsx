import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  individuals,
  subscribed,
  subscribing,
} from "./actions"


export const individualsSlice = {
  error: null,
  individuals: [],
  subscribing: false,
  subscribed: false,
}

const individualsReducer = createReducer( individualsSlice, {


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
