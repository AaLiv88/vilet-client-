import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { WorkActionCreator } from "../../redux/actionCreators/workActionCreator";
import WorksList from "./WorksList/WorksList";
import cl from "./WorksPage.module.scss";
import { WorksCategoriesActionCreator } from "../../redux/actionCreators/worksCategoriesActionCreator";
import { IWorkCategory } from "../../models/IWorkCategory";
import { setSelectedWorksCategory } from "../../redux/slices/worksCategoriesSlice";
import { ErrorAndLoadingHandler } from "../../utils/ErrorAndLoadingHandler";

const WorksPage = () => {
    const dispatch = useAppDispatch();
    const { isLoading: worksLoading, error: worksError } = useAppSelector(state => state.work);
    const {
        error: categoriesError,
        isLoading: categoriesLoading,
        categories,
        selectedCategory
    } = useAppSelector(state => state.workCategories);

    useEffect(() => {
        dispatch(WorkActionCreator.fetch(selectedCategory));
        dispatch(WorksCategoriesActionCreator.fetch());
    }, [selectedCategory]);


    const onCategoryClick = (category: IWorkCategory) => {
        dispatch(setSelectedWorksCategory(category));
    }

    return ErrorAndLoadingHandler(worksLoading || categoriesLoading, !!worksError || !!categoriesError,
        <div className={cl.root}>
            <div className={cl.categories}>
                {categories
                    .concat([{ name: "все работы", id: "0" }])
                    .map(category =>
                        <div
                            key={category.id}
                            onClick={() => onCategoryClick(category)}
                            style={{ background: category.id == selectedCategory.id ? "pink" : "" }}
                        >
                            {category.name}
                        </div>
                    )}
            </div>
            <WorksList/>
        </div>
    )
};

export default WorksPage;