import React, { FC } from 'react';
import cl from "./WorkImage.module.scss";

interface ImageProps {
    alt?: string;
    src: string;
    className?: string;
}

const WorkImage: FC<ImageProps> = ({ alt, src = "Пример нашей работы", className }) => {
    return (
        <div className={cl.imageWrapper}>
            <img alt={alt} src={src} className={[cl.image, className].join(" ")}/>
        </div>
    );
};

export default WorkImage;