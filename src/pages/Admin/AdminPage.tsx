import React from 'react';
import { useAppSelector } from "../../hooks/redux";
import AdminForm from "./AdminForm/AdminForm";
import AdminPanel from "./AdminPanel/AdminPanel";

const AdminPage = () => {
    const { user, isAuth } = useAppSelector(state => state.user);

    return (
        <>
            {user.role === process.env.REACT_APP_ROLE_ADMIN
                ? <AdminPanel/>
                : <AdminForm/>
            }
        </>
    );
};

export default AdminPage;