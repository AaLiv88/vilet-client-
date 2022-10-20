import Spinner from "../components/Spinner/Spinner";
import React from "react";

// export const ErrorAndLoadingHook = (
//     loadingConditions: any[],
//     // errorCondition: any[]
// ) => {
//     const isLoading = loadingConditions.some(condition => condition);
//     // const isError = errorCondition.some(condition => condition === true);
//
//     console.log(isLoading);
//
//     if (isLoading) {
//         return <Spinner/>
//     }
//     // if (isError) {
//     //     return <h1>Error</h1>
//     // }
// }

export const ErrorAndLoadingHook = (isLoading: Boolean, isError: Boolean): React.ReactNode => {
    if (isLoading) {
        console.log("l");
        return <Spinner/>
    }
    if (isError) {
        console.log("e");
        return <h1>Ошибка</h1>
    }
}