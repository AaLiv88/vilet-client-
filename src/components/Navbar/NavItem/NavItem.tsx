import React, { FC } from 'react';
import { NavLink } from "react-router-dom";
import { IRoute } from "../../../router/routes";
import cl from "./NavItem.module.scss";

interface NavItemProps {
    route: IRoute;
}

const NavItem: FC<NavItemProps> = ({ route }) => {
    return (
        <NavLink
            key={route.path}
            to={route.path}
            className={cl.item}
        >
            {route.name}
        </NavLink>
    );
};

export default NavItem;