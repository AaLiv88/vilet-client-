import React, { FC } from 'react';
import cl from "./Container.module.scss";

interface ContainerProps {
    children: JSX.Element;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className={cl.root}>
            {children}
        </div>
    );
};

export default Container;