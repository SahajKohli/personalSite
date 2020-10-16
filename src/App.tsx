import React from 'react'
import {render} from 'react-dom';
import { Router, RouteComponentProps, Link } from "@reach/router"
import Main from './pages/Main'
import HeaderOfSite from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';
import Dailies from './pages/Dailies';
import Resume from './pages/Resume';
import BadPath from './pages/404';
import Blogpost from './pages/blogpost';
import './styles/index.css';

let HomePage = (props: RouteComponentProps) => <Main/>
let ResumePage = (props: RouteComponentProps) => <Resume/>
let DailiesPage = (props: RouteComponentProps) => <Dailies/>
let ContactPage = (props: RouteComponentProps) => <Contact/>
let DefaultPage = (props:RouteComponentProps) => <BadPath/>

let BlogpostPage = (props:RouteComponentProps) => <Blogpost/>

const App = () =>  {
    return (
        <div>
        <HeaderOfSite/>
        <Router>
            <HomePage path='/' />
            <ResumePage path='/resume' />
            <DailiesPage path='/dailies' />
            <ContactPage path='/connect' />
            <BlogpostPage path='/blogpost' />
            <DefaultPage default />
        </Router>
        <Footer/>
        </div>
    );
};

render (<App/>, document.getElementById("root"))