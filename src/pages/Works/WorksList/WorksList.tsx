import React, { FC } from 'react';
import { useAppSelector } from "../../../hooks/redux";
import WorkItem from "../WorkItem/WorkItem";

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