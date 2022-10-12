import { $authHost, $host } from "../../http";
import jwtDecode from "jwt-decode";
import { setUserError, setUserIsLoading, setUser } from "../slices/userSlice";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";


const UserActionCreators = {
    registration: (email: string, password: string, phone: string, name: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(setUserIsLoading(true));
            const { data } = await $host.post("api/user/registration", { email, password, phone, name, role: "ADMIN" });
            const user: IUser = jwtDecode(data.token);
            dispatch(setUser(user));

            localStorage.setItem("token", data.token);

        } catch (error: any) {
            dispatch(setUserError(error.response.data.message));
        }
    },
    login: (login: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(setUserIsLoading(true));
            const { data } = await $host.post("api/user/login", { login, password });
            const user: IUser = jwtDecode(data.token);
            dispatch(setUser(user));

            localStorage.setItem("token", data.token);

        } catch (error: any) {
            dispatch(setUserError(error.response.data.message));
        }
    },
    checkIsAuth: () => async (dispatch: AppDispatch) => {
        try {
            setUserIsLoading(true);
            const { data } = await $authHost.get("api/user/auth");
            const user: IUser = jwtDecode(data.token);
            dispatch(setUser(user));

            localStorage.setItem("token", data.token);

        } catch (error: any) {
            localStorage.removeItem("token")
            dispatch(setUserError(error.response.data.message));
        }
    },
}

export const { registration, login, checkIsAuth } = UserActionCreators;