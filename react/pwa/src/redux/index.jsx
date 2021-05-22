import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { greybeardReducer, greybeardSlice } from './greybeard/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    greybeard: greybeardReducer,
  })

  const preloadedState = {
    greybeard: greybeardSlice,
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