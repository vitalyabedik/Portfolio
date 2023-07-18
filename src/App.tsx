import React from 'react';

import {Header} from './layout/Header';
import {Skills} from './layout/Skills';
import {ContactForm} from './layout/ContactForm';
import {Footer} from './layout/Footer';
import {Projects} from './layout/Projects';
import {Main} from './layout/Main';
import {SkillsContext, ProjectsContext} from './context';
import {projects, skills} from './data';


function App() {
    return (
        <SkillsContext.Provider value={skills}>
            <ProjectsContext.Provider value={projects}>
                <Header/>
                <main>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <ContactForm/>
                </main>
                <Footer/>
            </ProjectsContext.Provider>
        </SkillsContext.Provider>
    );
}

export default App;
