import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { viewWidthEnum } from "../../utils/viewWidth";
import { IRoute } from "../../router/routes";
import { IUser } from "../../models/IUser";
import { localStorageKeyToken } from "../../utils/consts";

interface UserState {
    viewWidth: number;
    isDesktop: boolean;
    isMobile: boolean;
    isTablet: boolean;
    thisPage: null | IRoute;

    isAuth: boolean;
    isLoading: boolean;
    error: string;
    user: IUser;
}

const initialState: UserState = {
    viewWidth: NaN,
    isDesktop: false,
    isMobile: false,
    isTablet: false,
    thisPage: null,

    isAuth: false,
    isLoading: false,
    error: "",
    user: {} as IUser,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setViewWidth(state: UserState, action: PayloadAction<number>) {
            state.viewWidth = action.payload;

            if (action.payload <= viewWidthEnum.isMobile) {
                state.isMobile = true;
            } else if (action.payload <= viewWidthEnum.isTablet) {
                state.isTablet = true;
            } else {
                state.isDesktop = true;
            }
        },
        setThisPage(state: UserState, action: PayloadAction<IRoute>) {
            state.thisPage = action.payload;
        },
        logOut(state: UserState) {
            localStorage.removeItem(localStorageKeyToken);
            state.user = {} as IUser;
            state.isAuth = false;
            state.isLoading = false;
            state.error = "";
        },
        setUserIsLoading(state: UserState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setUser(state: UserState, action: PayloadAction<IUser>) {
            state.user = action.payload;
            state.isAuth = true;
            state.isLoading = false;
        },
        setUserError(state: UserState, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
});

export const { setViewWidth, setThisPage, setUser, setUserIsLoading, setUserError } = userSlice.actions;
export default userSlice.reducer;