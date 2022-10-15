import React, { FC } from 'react';
import { NavLink } from "react-router-dom";
import { IRoute } from "../../../router/routes";
import cl from "./NavItem.module.scss";
import { useAppDispatch } from "../../../hooks/redux";
import { setThisPage } from "../../../redux/slices/userSlice";

interface NavItemProps {
    route: IRoute;
}

const NavItem: FC<NavItemProps> = ({ route }) => {
    const dispatch = useAppDispatch();

    return (
        <NavLink
            key={route.path}
            to={route.path}
            className={cl.item}
            onClick={() => dispatch(setThisPage(route))}
        >
            {route.name}
        </NavLink>
    );
};

export default NavItem;