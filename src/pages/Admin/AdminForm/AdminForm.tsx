import React, { FC, useState } from 'react';
import { useAppDispatch } from "../../../hooks/redux";
import { login } from "../../../redux/actionCreators/UserActionCreators";
import cl from "./AdminForm.module.scss";

const AdminForm: FC = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onAdminLogin = () => {
        dispatch(login(name, password));
    }

    return (
        <div className={cl.root}>
            <input
                className={cl.formItem}
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                className={cl.formItem}
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button
                className={cl.formItem}
                onClick={onAdminLogin}
            >
                Войти
            </button>
        </div>
    );
};

export default AdminForm;