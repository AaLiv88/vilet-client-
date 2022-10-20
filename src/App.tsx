import React, { useEffect } from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import { useAppDispatch } from "./hooks/redux";
import { setViewWidth } from "./redux/slices/userSlice";
import { checkIsAuth } from "./redux/actionCreators/UserActionCreators";
import Spinner from "./components/Spinner/Spinner";
import ErrorAndLoadingHandler from "./components/ErrorAndLoadingHandler/ErrorAndLoadingHandler";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const width = window.innerWidth;
        dispatch(setViewWidth(width));
        dispatch(checkIsAuth());
    }, []);

    return (
        <>
            {/*<Spinner/>*/}
            <AppRouter/>
            {/*<ErrorAndLoadingHandler loadingConditions={["123", "1"], []} errorCondition={["123"]}/>*/}
        </>
    );
}

export default App;
