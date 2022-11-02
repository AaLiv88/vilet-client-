import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { WorkByIdActionCreator } from "../../redux/actionCreators/WorkByIdActionCreator";
import { useParams } from "react-router-dom";
import cl from "./WorkByIdPage.module.scss";
import { ErrorAndLoadingHandler } from "../../utils/ErrorAndLoadingHandler";
import Slider from "./Slider/Slider";


const WorkByIdPage = () => {
    const dispatch = useAppDispatch();
    const { work, isLoading, error } = useAppSelector(state => state.workById);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(WorkByIdActionCreator.fetch(id));
        }
    }, []);

    return ErrorAndLoadingHandler(isLoading, !!error,
        <div className={cl.root}>
            <Slider work={work}/>
            <div className={cl.text}>
                <p className={cl.name}>
                    {work?.name}
                </p>

                <p className={cl.descriptionText}>
                    {work?.description}
                </p>
            </div>
        </div>
    );
};

export default WorkByIdPage;