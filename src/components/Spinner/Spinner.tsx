import React, { FC } from 'react';
import cl from "./Spinner.module.scss";

const Spinner: FC = () => {
    return (
        <div className={cl.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;