
//React Dependencies
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'

//React JSX files.
import NavTop from './Home/Nav/NavTop/NavTop'
import NavCenter from './Home/Nav/NavCenter/NavCenter'
import Product from './Home/product/product'

//css files
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home/Nav/NavTop/NavTop.css'


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <>
    <NavCenter />
        <NavTop />
    <Product />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
