import React, { FC } from 'react';
import { IWorkCategory } from "../../../models/IWorkCategory";
import { setSelectedWorksCategory } from "../../../redux/slices/worksCategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import cl from "./WorksCategoriesList.module.scss";

const WorksCategoriesList: FC = () => {
    const dispatch = useAppDispatch();
    const {
        categories,
        selectedCategory
    } = useAppSelector(state => state.workCategories);

    const onCategoryClick = (category: IWorkCategory) => {
        dispatch(setSelectedWorksCategory(category));
    }
    return (
        <div className={cl.categories}>
            {categories
                .concat([{ name: "все работы", id: "0" }])
                .map(category =>
                    <div
                        key={category.id}
                        onClick={() => onCategoryClick(category)}
                        className={[selectedCategory.id == category.id && cl.itemActive, cl.item].join(" ")}
                    >
                        {category.name}
                    </div>
                )}
        </div>
    );
};

export default WorksCategoriesList;