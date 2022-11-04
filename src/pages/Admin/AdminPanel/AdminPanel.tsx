import React, { FC } from 'react';
import AddWork from "../AddWork/AddWork";
import { logOut } from "../../../redux/actionCreators/UserActionCreators";
import { useAppDispatch } from "../../../hooks/redux";
import AddCategoryWork from "../AddCategoryWork/AddCategoryWork";

const AdminPanel: FC = () => {
    const dispatch = useAppDispatch();

    const logOutOnClick = () => {
        dispatch(logOut());
    }
    return (
        <>
            <AddWork/>
            <AddCategoryWork/>
            <button onClick={logOutOnClick}>
                Выйти
            </button>
        </>
    );
};

export default AdminPanel;