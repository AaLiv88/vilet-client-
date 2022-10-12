import { $host } from "../../http";
import { AppDispatch } from "./../store";
import { workByIdFetch, workByIdFetchError, workByIdFetchSuccess } from "../slices/workByIdSlice";

export const WorkByIdActionCreator = {
    fetch: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(workByIdFetch());
            const { data } = await $host.get("/api/work/" + id);
            dispatch(workByIdFetchSuccess(data));
        } catch (error: any) {
            workByIdFetchError(error.message);
        }
    },

};