import { $host } from "../../http";
import { AppDispatch } from "../store";
import { worksFetch, worksFetchError, worksFetchSuccess } from "../slices/worksSlice";
import { IWorkCategory } from "../../models/IWorkCategory";

export const WorkActionCreator = {
    fetch: (category: IWorkCategory) => async (dispatch: AppDispatch) => {
        try {
            dispatch(worksFetch());
            const response = await $host.get(`api/work/${category.id}`);
            dispatch(worksFetchSuccess(response.data));
        } catch (error: any) {
            worksFetchError(error.message);
        }
    },

};