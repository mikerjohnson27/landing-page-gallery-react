import React from 'react';
import Nav from './components/nav';
import 'bootstrap/dist/css/bootstrap.css'
import { createRoot } from 'react-dom/client';
import Home from './components/homepage/home';


const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
    <>
        <Nav />
            <Home />
    </>
    );