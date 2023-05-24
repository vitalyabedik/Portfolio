import React from 'react';

import './App.css';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {HireMe} from './components/HireMe';
import {ContactForm} from './components/ContactForm';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <HireMe/>
            <ContactForm/>
        </div>
    );
}

export default App;
