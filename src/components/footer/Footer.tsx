import React from 'react';
import styles from './Footer.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Icon from "./icon/Icon";

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h3 className={styles.title}>Jeffrey</h3>
                <div className={styles.iconsContainer}>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                </div>
                <span className={styles.copyright}>&copy; 2023 Все права защищены </span>
            </div>
        </div>

    );
};

export default Footer;