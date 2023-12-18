import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import appReducer from './appSlice'
import travelReducer from './travelSlice'
import foodReducer from './foodSlice'
import blogReducer from './blogSlice'
import sliderReducer from './sliderSlice'
import authReducer from './authSlice'
import searchReducer from './searchSlice'
import notifycationsReducer from './notifycations'
import customerSlice from './customerSlice'
import billSlice from './billSlice'
import userReducer from './userSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  app: appReducer,
  travel: travelReducer,
  food: foodReducer,
  blog: blogReducer,
  slider: sliderReducer,
  auth: authReducer,
  search: searchReducer,
  notify: notifycationsReducer,
  customer: customerSlice,
  bill: billSlice,
  user: userReducer
})

const persistedReducer = persistReducer(
  persistConfig, rootReducer
)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store