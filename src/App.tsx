import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import WorkSchedule from "./components/workSchedule/workSchedule";
import Contacts from "./components/сontacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <WorkSchedule/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
