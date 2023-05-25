import React from 'react';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {HireMe} from './components/HireMe';
import {ContactForm} from './components/ContactForm';
import {Footer} from './components/Footer';

function App() {
    return (
        <>
            <Header/>
            <main>
                <Main/>
                <Skills/>
                <Projects/>
                <HireMe/>
                <ContactForm/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
