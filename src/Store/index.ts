import { configureStore } from "@reduxjs/toolkit";

import questionsSlice from "./Questions/slice";

export const store = configureStore({
    reducer: {
        questions: questionsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
