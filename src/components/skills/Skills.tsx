import React from 'react';
import styles from "./Skills.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={styleContainer.container + " " + styles.containerSkills}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

export default Skills;