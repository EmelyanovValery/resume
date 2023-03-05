import React from 'react';
import style from "./Skill.module.css"


const Skill = () => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}></div>
            <h3 className={style.title}>
                React
            </h3>
            <span className={style.description}>Подробное описание навыка</span>
        </div>
    );
};

export default Skill;