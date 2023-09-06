import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi, messageApi } from '../services';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat([userApi.middleware, messageApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
