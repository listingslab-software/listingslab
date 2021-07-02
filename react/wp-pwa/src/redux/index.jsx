import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { wordpressReducer, wordpressSlice } from './wordpress/reducer'
import { skipIntroReducer, skipIntroSlice } from '../packages'
import { localifyReducer, localifySlice } from '../packages'
import { mapboxReducer, mapboxSlice } from './mapbox/reducer'
import { hostReducer, hostSlice } from './host/reducer'
import { layoutReducer, layoutSlice } from './layout/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    wordpress: wordpressReducer,
    skipIntro: skipIntroReducer,
    localify: localifyReducer,
    mapbox: mapboxReducer,
    host: hostReducer,
    layout: layoutReducer,
  })

  const preloadedState = {
    app: appSlice,
    wordpress: wordpressSlice,
    skipIntro: skipIntroSlice,
    localify: localifySlice,
    mapbox: mapboxSlice,
    host: hostSlice,
    layout: layoutSlice,
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