import React, { FC } from 'react';
import Spinner from "../Spinner/Spinner";

interface ErrorAndLoadingHandlerProps {
    loadingConditions: boolean;
    errorCondition: boolean;
}

const ErrorAndLoadingHandler: FC<ErrorAndLoadingHandlerProps> =
    ({ loadingConditions, errorCondition }) => {

        // const isLoading = loadingConditions.some(condition => condition.length === 0);
        // const isError = errorCondition.some(condition => condition.length !== 0);
        //
        // console.log(isError);

        // let isLoading2 = true;
        //
        // for (let i = 0; i < loadingConditions.length; i++) {
        //     isLoading2 = !(!!loadingConditions[i].length);
        // }
        //
        // console.log(isLoading, isLoading2);

        return (
            <>
                {loadingConditions && <Spinner/>}
                {errorCondition && <h1>Error</h1>}
            </>
        );
    };

export default ErrorAndLoadingHandler;