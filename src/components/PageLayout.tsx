import React, { FC } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";


const PageLayout: FC = () => {

    return (
        <div>
            <Navbar/>

            <Container>
                <Outlet/>
            </Container>
        </div>
    );
};

export default PageLayout;