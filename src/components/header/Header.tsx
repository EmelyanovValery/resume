import React from 'react';
import style from "./Header.module.css"
import Navigation from "../navigation/Navigation";
import styleContainer from "../../common/styles/Container.module.css"


const Header = () => {
    return (
        <div className={style.header}>
           <div className={styleContainer.container+" "+style.containerHeader}>
               <Navigation/>
           </div>
        </div>
    );
};

export default Header;