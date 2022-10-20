import React, { FC } from 'react';
import { useAppSelector } from "../../../hooks/redux";
import WorkItem from "../WorkItem/WorkItem";
import ErrorAndLoadingHandler from "../../../components/ErrorAndLoadingHandler/ErrorAndLoadingHandler";
import { ErrorAndLoadingHook } from "../../../hooks/ErrorAndLoadingHook";

const WorksList: FC = () => {
    const { works } = useAppSelector(state => state.work);

    return (
        <div>
            {works && works.map(work =>
                <WorkItem work={work} key={work.id}/>
            )}
        </div>
    );
};

export default WorksList;