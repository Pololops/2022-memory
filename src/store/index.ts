import { configureStore } from '@reduxjs/toolkit'
import reducer from '../reducers';
import logger from '../middlewares/logger';
import { validateCombination } from '../middlewares/cards';

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, validateCombination),

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
