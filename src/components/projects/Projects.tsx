import React from 'react';
import styles from "./Projects.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import Project from "./project/Project";
import Title from "../../common/components/Title";
import ToDoListImage from "../../assets/image/toDoList.jpg"
import SocialNetworkImage from "../../assets/image/socialNetwork.jpg"
import ExampleImage from "../../assets/image/example.jpg"

const Projects = () => {
    const toDoListStyle = {
        backgroundImage: 'url(' + ToDoListImage + ')'
    };
    const socialNetworkStyle = {
        backgroundImage: 'url(' + SocialNetworkImage + ')'
    };
    const exampleStyle = {
        backgroundImage: 'url(' + ExampleImage + ')'
    };

    return (
        <div className={styles.projectsBlock}>
            <div className={styleContainer.container+" "+styles.projectsContainer}>
                <Title text={"Projects"}/>
                <div className={styles.projects}>
                    <Project style={toDoListStyle} title={"ToDoList"} description={"description description description description"}/>
                    <Project style={socialNetworkStyle}  title={"SocialNetwork"} description={"description description description description"}/>
                    <Project style={exampleStyle} title={"10 tips for drawing with coloured pencils"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                </div>

            </div>
        </div>
    );
};

export default Projects;