import { configureStore } from '@reduxjs/toolkit'
import reducer from '../reducers';

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer,

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
