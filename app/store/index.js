import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import chatReducer from './Slices/chatSlice';
import userReducer from './Slices/userSlice';
import graphReducer from './Slices/graphAndSummarySlice';
import questionReducer from './Slices/questionSlice';
import pdfReducer from "./Slices/pdfSlice";
import researchReducer from './Slices/researchSlice';

let devtools = x => x;
if (
    process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  graph: graphReducer,
  question: questionReducer,
  pdf: pdfReducer,
  research: researchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
