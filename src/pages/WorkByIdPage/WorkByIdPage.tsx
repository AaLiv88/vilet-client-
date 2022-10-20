import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { WorkByIdActionCreator } from "../../redux/actionCreators/WorkByIdActionCreator";
import { useParams } from "react-router-dom";
import cl from "./WorkByIdPage.module.scss";
import Spinner from "../../components/Spinner/Spinner";
import { ErrorAndLoadingHook } from "../../hooks/ErrorAndLoadingHook";
import ErrorAndLoadingHandler from "../../components/ErrorAndLoadingHandler/ErrorAndLoadingHandler";


//todo сделать обрботку загрузки ошибки
const WorkByIdPage = () => {
    const dispatch = useAppDispatch();
    const { work, isLoading, error } = useAppSelector(state => state.workById);
    const { id } = useParams();
    const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

    useEffect(() => {
        if (id) {
            dispatch(WorkByIdActionCreator.fetch(id));
        }
    }, []);

    // ErrorAndLoadingHook([isLoading  , !work.imagesUrls]);
    //
    if (!work.imagesUrls) {
        return <h1>123</h1>
    }

    // console.log(work.imagesUrls);

    // console.log(!![]);

    // if (error) {
    //     return <h1>Ошибка</h1>
    // }
    // if (isLoading) {
    //     return <Spinner/>
    // }
    // if (!work.imagesUrls) {
    //     return <h1>Ошибка</h1>
    // }

    const activeImgUrl = process.env.REACT_APP_API_URL + "/" + work.imagesUrls[activeImgIndex];
    const sideImages = work.imagesUrls.map(url => url = process.env.REACT_APP_API_URL + "/" + url);

    return (
        <>
            {/*<ErrorAndLoadingHandler loadingConditions={[isLoading]} errorCondition={[error, !work.imagesUrls]}/>*/}

            <div className={cl.slider}>
                {work.imagesUrls &&
                    <img src={activeImgUrl} className={cl.imageActive}/>
                }

                {sideImages.map((url, index) =>
                    <img
                        className={index !== activeImgIndex ? cl.image : cl.imageHidden}
                        onClick={() => setActiveImgIndex(index)}
                        src={url}
                        key={url}
                    />
                )}
            </div>
            <div>
                <p className={cl.name}>
                    {work.name}
                </p>

                <p className={cl.descriptionText}>
                    {work.description}
                </p>
            </div>
        </>
    );
};

export default WorkByIdPage;