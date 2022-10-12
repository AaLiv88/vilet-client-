import React, { FC } from 'react';
import { IWork } from "../../../models/IWork";
import cl from "./WorkItem.module.scss";
import { useNavigate } from "react-router-dom";

interface CatalogItemProps {
    work: IWork;
}

const WorkItem: FC<CatalogItemProps> = ({ work }) => {
    const navigate = useNavigate();

    const onItemClick = (id: number) => {
        return () => {
            navigate("/works/" + id);
        }
    }

    return (
        <div className={cl.item} onClick={onItemClick(work.id)}>
            <img src={`${process.env.REACT_APP_API_URL}/${work.mainImageUrl}`} alt="Пример нашей работы"/>
            <div>{work.name}</div>
        </div>
    );
};

export default WorkItem;