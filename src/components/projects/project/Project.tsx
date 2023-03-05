import React from 'react';
import styles from "./Project.module.css"
const Project = () => {
    return (
        <div  className={styles.projectBlock}>
            <div className={styles.image}>
                <a href="" className={styles.link}>Смотреть</a>
            </div>
            <h3 className={styles.title}>Название проекта</h3>
            <span className={styles.description}>Краткое описание</span>
        </div>
    );
};

export default Project;