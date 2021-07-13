import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { wordpressReducer, wordpressSlice } from './wordpress/reducer'
import { mapboxReducer, mapboxSlice } from './mapbox/reducer'
import { hostReducer, hostSlice } from './host/reducer'
import { layoutReducer, layoutSlice } from './layout/reducer'
import { localifyReducer, localifySlice } from './localify/reducer'
import { animationReducer, animationSlice } from './animation/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    wordpress: wordpressReducer,
    mapbox: mapboxReducer,
    host: hostReducer,
    layout: layoutReducer,
    localify: localifyReducer,
    animation: animationReducer,
  })

  const preloadedState = {
    app: appSlice,
    wordpress: wordpressSlice,
    mapbox: mapboxSlice,
    host: hostSlice,
    layout: layoutSlice,
    localify: localifySlice,
    animation: animationSlice,
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