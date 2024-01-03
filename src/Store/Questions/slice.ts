import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Question[] = [];

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setQuestionsInfo: (_, action: PayloadAction<Question[]>) => {
            return [...action.payload];
        },
    },
});

export default questionsSlice.reducer;

export const { setQuestionsInfo } = questionsSlice.actions;
