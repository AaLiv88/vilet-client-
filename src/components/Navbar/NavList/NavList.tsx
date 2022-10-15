import React, { FC } from 'react';
import NavItem from "../NavItem/NavItem";
import { routes } from "../../../router/routes";

const NavList: FC = () => {
    return (
        <>
            {routes.map(route =>
                <NavItem route={route} key={route.path}/>
            )}
        </>
    );
};

export default NavList;