import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { animatedsvgReducer, animatedsvgSlice } from './animatedsvg/reducer'

const reduxStore = options => {
  const reducer = combineReducers({
    animatedsvg: animatedsvgReducer,
  })

  const preloadedState = {
    animatedsvg: animatedsvgSlice,
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
