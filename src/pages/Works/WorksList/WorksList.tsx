import React, { FC } from 'react';
import { useAppSelector } from "../../../hooks/redux";
import WorkItem from "../WorkItem/WorkItem";
import cl from "./WorksList.module.scss";

const WorksList: FC = () => {
    const { works } = useAppSelector(state => state.work);

    if (works.length === 0) {
        return <h1>работ не найдено</h1>
    }

    return (
        <div className={cl.list}>
            {works && works.map(work =>
                <WorkItem work={work} key={work.id}/>
            )}
        </div>
    );
};

export default WorksList;