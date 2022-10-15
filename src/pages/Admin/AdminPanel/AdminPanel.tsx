import React, { FC } from 'react';
import AddWork from "../AddWork/AddWork";
import { logOut } from "../../../redux/actionCreators/UserActionCreators";
import { useAppDispatch } from "../../../hooks/redux";

const AdminPanel: FC = () => {
    const dispatch = useAppDispatch();

    const logOutOnClick = () => {
        dispatch(logOut());
    }
    return (
        <div>
            <AddWork/>
            <button>Добавить категорию работ</button>
            <button onClick={logOutOnClick}>
                Выйти
            </button>
        </div>
    );
};

export default AdminPanel;