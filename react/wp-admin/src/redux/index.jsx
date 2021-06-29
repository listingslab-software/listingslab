import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { apiReducer, apiSlice } from './api/reducer'
import { hostReducer, hostSlice } from './host/reducer'
import { individualsReducer, individualsSlice } from './individuals/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    api: apiReducer,
    host: hostReducer,
    individuals: individualsReducer,
  })

  const preloadedState = {
    app: appSlice,
    api: apiSlice,
    host: hostSlice,
    individuals: individualsSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: []
  })
  return store
}

export default reduxStore