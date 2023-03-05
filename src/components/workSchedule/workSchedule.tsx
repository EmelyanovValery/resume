import React from 'react';
import styles from "./workSchedule.module.css"
import styleContainer from "../../common/styles/Container.module.css"

const WorkSchedule = () => {
    return (
        <div className={styles.workScheduleBlock}>
            <div className={styleContainer.container+" "+styles.workScheduleContainer}>
                <h3 className={styles.title}>Рассматриваю варианты удаленной работы</h3>
                <a href="" className={styles.button}>Нанять меня</a>
            </div>
        </div>
    );
};

export default WorkSchedule;