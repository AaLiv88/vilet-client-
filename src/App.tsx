import React, { useEffect } from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import { useAppDispatch } from "./hooks/redux";
import { setViewWidth } from "./redux/slices/userSlice";
import { checkIsAuth } from "./redux/actionCreators/UserActionCreators";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const width = window.innerWidth;
        dispatch(setViewWidth(width));
        dispatch(checkIsAuth());
    }, []);

    return (
        <>
            <AppRouter/>
        </>
    );
}

export default App;
