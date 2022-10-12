import { $host } from "../../http";
import { AppDispatch } from "./../store";
import { worksCategoriesFetch, worksCategoriesFetchError, worksCategoriesFetchSuccess } from "../slices/worksCategoriesSlice";

export const WorksCategoriesActionCreator = {
    fetch: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(worksCategoriesFetch());
            const { data } = await $host.get("api/worksCategories");
            dispatch(worksCategoriesFetchSuccess(data));
        } catch (error: any) {
            worksCategoriesFetchError(error.message);
        }
    },
};