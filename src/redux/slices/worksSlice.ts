import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWork } from "../../models/IWork";

interface WorkState {
    isLoading: boolean;
    error: string;
    works: IWork[];
}

const initialState: WorkState = {
    isLoading: false,
    error: "",
    works: []
}

const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {
        worksFetch(state: WorkState) {
            state.isLoading = true;
            state.error = "";
            state.works = [];
        },
        worksFetchSuccess(state: WorkState, action: PayloadAction<IWork[]>) {
            state.isLoading = false;
            state.works = action.payload;
        },
        worksFetchError(state: WorkState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { worksFetchSuccess, worksFetchError, worksFetch } = workSlice.actions;
export default workSlice.reducer;