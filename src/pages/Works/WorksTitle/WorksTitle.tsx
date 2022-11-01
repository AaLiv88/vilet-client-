import React, { FC } from 'react';
import { useAppSelector } from "../../../hooks/redux";
import cl from "./WorksTitle.module.scss";

const WorksTitle: FC = () => {
    const { selectedCategory } = useAppSelector(state => state.workCategories)

    return (
        <h2 className={cl.title}>
            {selectedCategory.name}
        </h2>
    );
};

export default WorksTitle;