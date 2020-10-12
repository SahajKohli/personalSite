import React from 'react'
import {render} from 'react-dom';
import { Router, RouteComponentProps, Link } from "@reach/router"
import Main from './pages/Main'
import Header from './components/header/Header';
import 'semantic-ui-css/semantic.min.css';
//import '../src/styles/index.css';


const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
  ) => props.pageComponent;

const App = () =>  {
    console.log("Loading...")
    return (
        <div>
        <Header/>
        <Router>
            <RouterPage path='/' pageComponent={<Main/>} />
        </Router>
        </div>
    );
};

render (<App/>, document.getElementById("root"))