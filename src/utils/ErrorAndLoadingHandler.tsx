import Spinner from "../components/Spinner/Spinner";
import React from "react";

export const ErrorAndLoadingHandler = (loading: boolean, error: boolean, element: JSX.Element): JSX.Element => {
    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <h1>Error!</h1>
    }
    return element;
}
