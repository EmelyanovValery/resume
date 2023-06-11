import React from 'react';
import styles from "./workSchedule.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import Title from "../../common/components/Title";

const WorkSchedule = () => {
    return (
        <div className={styles.workScheduleBlock}>
            <div className={styleContainer.container+" "+styles.workScheduleContainer}>
                <Title text={"I Am Available For Freelancer"} />
                <a href="" className={styles.button}>HIRE ME</a>
            </div>
        </div>
    );
};

export default WorkSchedule;