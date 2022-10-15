import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkCategory } from "../../models/IWorkCategory";

interface WorksCategoriesState {
    isLoading: boolean;
    error: string;
    categories: IWorkCategory[];
    selectedCategory: IWorkCategory;
}

const initialState: WorksCategoriesState = {
    isLoading: false,
    error: "",
    categories: [],
    selectedCategory: { id: "0", name: "все работы" } as IWorkCategory,
}

const worksCategoriesSlice = createSlice({
    name: "workCategories",
    initialState,
    reducers: {
        worksCategoriesFetch(state: WorksCategoriesState) {
            state.isLoading = true;
            state.error = "";
            state.categories = [];
        },
        worksCategoriesFetchSuccess(state: WorksCategoriesState, action: PayloadAction<IWorkCategory[]>) {
            state.isLoading = false;
            state.categories = action.payload;
        },
        worksCategoriesFetchError(state: WorksCategoriesState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setSelectedWorksCategory(state: WorksCategoriesState, action: PayloadAction<IWorkCategory>) {
            state.selectedCategory = action.payload;
        }
    }
});

export const {
    worksCategoriesFetch,
    worksCategoriesFetchSuccess,
    worksCategoriesFetchError,
    setSelectedWorksCategory
} = worksCategoriesSlice.actions;
export default worksCategoriesSlice.reducer;