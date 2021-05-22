import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { reduxBatch } from "@manaflair/redux-batch";
import { userEntity, userEntitySlice } from "./userEntity/reducer";

const initRedux = () => {
  const persistConfig = {
    key: "userEntity",
    storage
  };

  const reducers = combineReducers({
    userEntity,
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ];

  const preloadedState = {
    userEntity: userEntitySlice,
  };

  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
    enhancers: [reduxBatch]
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default initRedux;
