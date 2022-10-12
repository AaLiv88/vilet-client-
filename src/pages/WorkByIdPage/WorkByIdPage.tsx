import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { WorkByIdActionCreator } from "../../redux/actionCreators/WorkByIdActionCreator";
import { useParams } from "react-router-dom";

const WorkByIdPage = () => {
    const dispatch = useAppDispatch();
    const { work } = useAppSelector(state => state.workById);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(WorkByIdActionCreator.fetch(id));
        }
    }, []);

    return (
        <div>
            {work.imagesUrls && work.imagesUrls.map(url =>
                <img src={process.env.REACT_APP_API_URL + "/" + url} alt="" width="150" height="100"/>
            )}
        </div>
    );
};

export default WorkByIdPage;