import React, { FC } from 'react';
import { privateRoutes, routes } from "./routes";
import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route element={<PageLayout/>}>
                {routes.map(route =>
                    <Route
                        path={route.path}
                        key={route.path}
                        element={route.element}

                    />
                )}
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        key={route.path}
                        element={route.element}
                    />
                )}
            </Route>
        </Routes>
    );
};

export default AppRouter;