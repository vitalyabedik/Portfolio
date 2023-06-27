import React from 'react';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {HireMe} from './components/HireMe';
import {ContactForm} from './components/ContactForm';
import {Footer} from './components/Footer';
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
                    <HireMe/>
                    <ContactForm/>
                </main>
                <Footer/>
            </ProjectsContext.Provider>
        </SkillsContext.Provider>
    );
}

export default App;
