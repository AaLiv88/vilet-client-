import React, { FC, useState } from 'react';
import NavList from "./NavList/NavList";
import cl from "./Navbar.module.scss";
import burger from "../../assets/burger.svg";
import close from "../../assets/close.svg";
import logo from "../../assets/logitip.svg";

const Navbar: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={cl.root}>
            <div className={cl.content}>

                <button className={cl.toggle} onClick={() => setIsVisible(!isVisible)}>
                    <img src={isVisible ? close : burger} alt=""/>
                </button>

                <img src={logo} width={"30px"} height={"30px"} alt=""/>

                <div className={[cl.navList, isVisible ? cl.navListActive : ""].join(" ")}>
                    <NavList/>
                </div>

            </div>
        </div>
    );
};

export default Navbar;