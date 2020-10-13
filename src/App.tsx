import React from 'react'
import {render} from 'react-dom';
import { Router, RouteComponentProps, Link } from "@reach/router"
import Main from './pages/Main'
import HeaderOfSite from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';
import Dailies from './pages/Dailies';
import Resume from './pages/Resume';

import './styles/index.css';
const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
  ) => props.pageComponent;

const App = () =>  {
    console.log("Loading...")
    return (
        <div>
        <HeaderOfSite/>
        <Router>
            <RouterPage path='/' pageComponent={<Main/>} />
            <RouterPage path='/resume' pageComponent={<Resume/>} />
            <RouterPage path='/dailies' pageComponent={<Dailies/>} />
            <RouterPage path='/connect' pageComponent={<Contact/>} />
        </Router>
        <Footer/>
        </div>
    );
};

render (<App/>, document.getElementById("root"))