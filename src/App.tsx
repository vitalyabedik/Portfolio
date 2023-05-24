import React from 'react';

import './App.css';

import {Header} from './components/Header';
import {Main} from './components/Main';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {HireMe} from './components/HireMe';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <HireMe/>
        </div>
    );
}

export default App;
