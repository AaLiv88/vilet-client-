import React, { FC } from 'react';
import { IWork } from "../../../models/IWork";
import cl from "./WorkItem.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutesPathEnum } from "../../../router/routes";

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
            <div className={cl.imageWrapper}>
                <img className={cl.image} src={`${process.env.REACT_APP_API_URL}/${work.mainImageUrl}`} alt="Пример нашей работы"/>
            </div>
            <div className={cl.name}>{work.name}</div>
        </div>
    );
};

export default WorkItem;