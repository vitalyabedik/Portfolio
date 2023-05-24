import React from 'react';

import {AppContainer, ContentContainer} from './components/App.styled';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {HireMe} from './components/HireMe';
import {ContactForm} from './components/ContactForm';
import {Footer} from './components/Footer';

function App() {
    return (
        <AppContainer>
            <Header/>
            <ContentContainer>
                <Main/>
                <Skills/>
                <Projects/>
                <HireMe/>
                <ContactForm/>
            </ContentContainer>
            <Footer/>
        </AppContainer>
    );
}

export default App;
