import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from 'store/slice/appSlice';
import { userSlice } from 'store/slice/userSlice';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    user: userSlice.reducer,
  },
});

export type AppRootStore = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
