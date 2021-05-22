import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { pingpongReducer, pingpongSlice } from './pingpong/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    pingpong: pingpongReducer,
  })

  const preloadedState = {
    app: appSlice,
    pingpong: pingpongSlice,
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