import React, { FC } from 'react';
import AddWork from "../AddWork/AddWork";

const AdminPanel: FC = () => {
    return (
        <div>
            <AddWork/>
            <button>Добавить категорию работ</button>
        </div>
    );
};

export default AdminPanel;