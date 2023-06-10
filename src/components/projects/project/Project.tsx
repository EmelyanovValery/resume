import React from 'react';
import styles from "./Project.module.scss"
import CSS from 'csstype';


type ProjectPropsType = {
    description: string
    title: string
    style:CSS.Properties
}
const Project:React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={styles.projectBlock}>
            <div style={props.style} className={styles.imageContainer}>
                <a href="" className={styles.link}>More</a>
            </div>
            <div className={styles.descriptionBlock}>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>

            </div>
        </div>
    );
};

export default Project;