import React, { FC } from 'react';
import { IWork } from "../../../models/IWork";
import cl from "./WorkItem.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesPathEnum } from "../../../router/routes";
import WorkImage from "../../../components/WorkImage/WorkImage";

interface CatalogItemProps {
    work: IWork;
}

const WorkItem: FC<CatalogItemProps> = ({ work }) => {
    const navigate = useNavigate();

    const onItemClick = (id: number) => {
        return () => {
            navigate(RoutesPathEnum.worksItem + id);
        }
    }

    return (
        <div className={cl.item} onClick={onItemClick(work.id)}>
            <WorkImage alt={"Пример нашей работы"} src={`${process.env.REACT_APP_API_URL}/${work.mainImageUrl}`}/>
            <div className={cl.name}>{work.name}</div>
        </div>
    );
};

export default WorkItem;