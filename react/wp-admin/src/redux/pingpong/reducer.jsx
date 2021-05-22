import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  tings,
  messages,
  subscribedTings,
  subscribingTings,
  showId,
  showHost,
  showBrowser,
  tingId,
  showCountryName,
  showMode,
  selectedHost,
  openedFirst,
  expandedAccordians,
  showTingFilters,
} from "./actions"

// const defaultHost = window.location.host
const defaultHost = `localhost:3000`

export const pingpongSlice = {
  error: null,
  tings: [],
  showTingFilters: false,
  expandedAccordians: {
    historyOpen: true,
    deviceOpen: false,
    messagesOpen: false,
    locationOpen: false,
    otherOpen: false,
  },
  messages: [],
  openedFirst: true,
  subscribedTings: false,
  subscribingTings: false,
  showId: true,
  showHost: true,
  showBrowser: true,
  showCountryName: true,
  tingId: false,
  showMode: `location`,
  selectedHost: defaultHost,
}

const pingpongReducer = createReducer(pingpongSlice, {

  [expandedAccordians]: (state, action) => {
    state.expandedAccordians = action.expandedAccordians
    return state
  },

  [showTingFilters]: (state, action) => {
    state.showTingFilters = action.showTingFilters
    return state
  },

  [openedFirst]: (state, action) => {
    state.openedFirst = action.openedFirst
    return state
  },
  
  [selectedHost]: (state, action) => {
    state.selectedHost = action.selectedHost
    return state
  },

  [showMode]: (state, action) => {
    state.showMode = action.showMode
    return state
  },
  
  [showCountryName]: (state, action) => {
    state.showCountryName = action.showCountryName
    return state
  },

  [tingId]: (state, action) => {
    state.tingId = action.tingId
    return state
  },

  [showBrowser]: (state, action) => {
    state.showBrowser = action.showBrowser
    return state
  },

  [showId]: (state, action) => {
    state.showId = action.showId
    return state
  },
  
  [showHost]: (state, action) => {
    state.showHost = action.showHost
    return state
  },
  
  [subscribedTings]: (state, action) => {
    state.subscribedTings = action.subscribedTings
    return state
  },

  [subscribingTings]: (state, action) => {
    state.subscribingTings = action.subscribingTings
    return state
  },

  [tings]: (state, action) => {
    state.tings = action.tings
    return state
  },

  [messages]: (state, action) => {
    state.messages = action.messages
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { pingpongReducer }