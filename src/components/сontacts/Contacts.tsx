import React from 'react';
import styles from "./Contacts.module.css"
import styleContainer from "../../common/styles/Container.module.css"

const Contacts = () => {
    return (
        <div className={styles.contactsBlock} >
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h3 className={styles.title}>Контакты</h3>
                <form action="" className={styles.formContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols={10} rows={5} className={styles.textarea}>

                    </textarea>
                </form>
                <button className={styles.button}>
                    Отправить
                </button>
            </div>
        </div>
    );
};

export default Contacts;