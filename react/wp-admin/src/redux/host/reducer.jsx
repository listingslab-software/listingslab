// import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const hostSlice = {
  error: null,
}

const hostReducer = createReducer( hostSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { hostReducer }