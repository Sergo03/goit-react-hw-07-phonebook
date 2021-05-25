import contactsReducer from './Contacts/reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


// import logger from 'redux-logger'



const middleware=[...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })]



export const store = configureStore({
    reducer: {
 contacts:contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV ==='development',
})

//  export let persistor = persistStore(store)

