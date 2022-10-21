import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkById } from "../../models/IWorkById";

interface WorkByIdState {
    isLoading: boolean;
    error: string;
    work: IWorkById | null;
}

const initialState: WorkByIdState = {
    isLoading: false,
    error: "",
    work: null,
}

const workByIdSlice = createSlice({
    name: "workById",
    initialState,
    reducers: {
        workByIdFetch(state: WorkByIdState) {
            state.isLoading = true;
            state.error = "";
            state.work = null;
        },
        workByIdFetchSuccess(state: WorkByIdState, action: PayloadAction<IWorkById>) {
            state.isLoading = false;
            state.work = action.payload;
        },
        workByIdFetchError(state: WorkByIdState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { workByIdFetch, workByIdFetchSuccess, workByIdFetchError } = workByIdSlice.actions;
export default workByIdSlice.reducer;