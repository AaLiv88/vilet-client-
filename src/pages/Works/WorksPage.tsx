import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { WorkActionCreator } from "../../redux/actionCreators/workActionCreator";
import WorksList from "./WorksList/WorksList";
import cl from "./WorksPage.module.scss";
import { WorksCategoriesActionCreator } from "../../redux/actionCreators/worksCategoriesActionCreator";
import { ErrorAndLoadingHandler } from "../../utils/ErrorAndLoadingHandler";
import Dropdown from "../../components/Dropdown/Dropdown";

const WorksPage = () => {
    const dispatch = useAppDispatch();
    const { isLoading: worksLoading, error: worksError } = useAppSelector(state => state.work);
    const {
        categories,
        error: categoriesError,
        isLoading: categoriesLoading,
        selectedCategory
    } = useAppSelector(state => state.workCategories);

    useEffect(() => {
        dispatch(WorkActionCreator.fetch(selectedCategory));
        dispatch(WorksCategoriesActionCreator.fetch());
    }, [selectedCategory]);

    return ErrorAndLoadingHandler(worksLoading || categoriesLoading, !!worksError || !!categoriesError,
        <div className={cl.root}>
            <Dropdown
                initialItem={selectedCategory}
                arr={[{ name: "все работы", id: "0" }].concat(categories)}
            />
            <WorksList/>
        </div>
    )
};

export default WorksPage;