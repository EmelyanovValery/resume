import React from 'react';
import styles from "./Contacts.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import Title from "../../common/components/Title";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock} >
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text={"Contact"}/>
                <form action="" className={styles.formContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols={10} rows={5} className={styles.textarea}>

                    </textarea>
                </form>
                <button className={styles.button}>
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default Contacts;