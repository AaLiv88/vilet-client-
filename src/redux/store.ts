import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import user from "./slices/userSlice";
import work from "./slices/worksSlice";
import workCategories from "./slices/worksCategoriesSlice";
import workById from "./slices/workByIdSlice";

export const store = configureStore({
    reducer: {
        user,
        work,
        workById,
        workCategories,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
