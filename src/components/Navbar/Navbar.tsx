import React, { FC, useState } from 'react';
import NavList from "./NavList/NavList";
import cl from "./Navbar.module.scss";
import burger from "../../assets/burger.svg";
import close from "../../assets/close.svg";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import logo from "../../assets/logitip.svg";

const Navbar: FC = () => {
    const { thisPage } = useAppSelector(state => state.user);
    const [isVisible, setIsVisible] = useState(false);
    const { pathname } = useLocation();

    return (
        <div className={cl.root}>
            <div className={cl.content}>

                <button className={cl.toggle} onClick={() => setIsVisible(!isVisible)}>
                    <img src={isVisible ? close : burger}/>
                </button>

                <img src={logo} width={"30px"} height={"30px"} alt=""/>

                {!isVisible &&
                    <div className={cl.thisPage}>{thisPage?.name}</div>
                }

                <div className={[cl.navList, isVisible ? cl.navListActive : ""].join(" ")}>
                    <NavList/>
                </div>

            </div>
        </div>
    );
};

export default Navbar;