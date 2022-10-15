import { $authHost, $host } from "../../http";
import jwtDecode from "jwt-decode";
import { setUser, setUserError, setUserIsLoading } from "../slices/userSlice";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { localStorageKeyToken } from "../../utils/consts";

const UserActionCreators = {
    registration: (email: string, password: string, phone: string, name: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(setUserIsLoading(true));
            const { data } = await $host.post("api/user/registration", {
                email,
                password,
                phone,
                name,
                role: process.env.REACT_APP_ROLE_ADMIN
            });
            const user: IUser = jwtDecode(data.token);
            dispatch(setUser(user));

            localStorage.setItem(localStorageKeyToken, data.token);

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

            localStorage.setItem(localStorageKeyToken, data.token);

        } catch (error: any) {
            dispatch(setUserError(error.response.data.message));
        }
    },
    logOut: () => async (dispatch: AppDispatch) => {
        dispatch(setUser({} as IUser));
        localStorage.removeItem(localStorageKeyToken);
    },
    checkIsAuth: () => async (dispatch: AppDispatch) => {
        try {
            setUserIsLoading(true);
            const { data } = await $authHost.get("api/user/auth");
            const user: IUser = jwtDecode(data.token);
            dispatch(setUser(user));

            localStorage.setItem(localStorageKeyToken, data.token);

        } catch (error: any) {
            localStorage.removeItem(localStorageKeyToken);
            dispatch(setUserError(error.response.data.message));
        }
    },
}

export const { registration, login, checkIsAuth, logOut } = UserActionCreators;