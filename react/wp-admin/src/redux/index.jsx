import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { hostReducer, hostSlice } from './host/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    host: hostReducer,
  })

  const preloadedState = {
    app: appSlice,
    host: hostSlice,
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