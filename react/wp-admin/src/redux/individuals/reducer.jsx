import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  individuals,
} from "./actions"


export const individualsSlice = {
  error: null,
  individuals: [],
  subscribing: false,
  subscribed: false,
}

const individualsReducer = createReducer( individualsSlice, {

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
