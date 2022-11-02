import React, { FC, useState } from 'react';
import cl from "./Slider.module.scss";
import { IWorkById } from "../../../models/IWorkById";
import WorkImage from "../../../components/WorkImage/WorkImage";

interface SliderProps {
    work: IWorkById | null;
}

//todo решить проблему со знаками вопроса
const Slider: FC<SliderProps> = ({ work }) => {
    const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

    const activeImgUrl = process.env.REACT_APP_API_URL + "/" + work?.imagesUrls?.[activeImgIndex];
    const sideImages = work?.imagesUrls.map(url => process.env.REACT_APP_API_URL + "/" + url);

    return (
        <div className={cl.slider}>
            {work?.imagesUrls &&
                <div className={cl.imageActive}>
                    <WorkImage src={activeImgUrl}/>
                </div>
            }
            <div className={cl.sideImages}>
                {sideImages?.map((url, index) =>
                    <div
                        key={url}
                        onClick={() => setActiveImgIndex(index)}
                        className={index !== activeImgIndex ? cl.image : cl.imageHidden}
                    >
                        <WorkImage src={url}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;