import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import squadMemberSelectionReducer from "../features/selection";

export const store = configureStore({
  reducer: {
    squadMemberSelection: squadMemberSelectionReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
