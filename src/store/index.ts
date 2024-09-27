import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import appSlice from 'store/app';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  devTools: true,
});

const useAppDispatch = () => useDispatch<AppDispatch>();
export type { RootState, AppDispatch };
export { store as default, useAppDispatch };
