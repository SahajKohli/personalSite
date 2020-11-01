import React from 'react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

//Images
const bloomberg = require('../images/pages/bloomberglp.jpg')
const wework = require('../images/pages/wework.jpg')
const amazon = require('../images/pages/amazon.png')
const att = require('../images/pages/att.jpg')
const jnj = require('../images/pages/jnj.jpg')
const rutgers = require('../images/pages/rutgers.png')
const react = require('../images/pages/react.png')
const java = require('../images/pages/java.svg')
const docker = require('../images/pages/docker.svg')
const node = require('../images/pages/nodejs.png')
const go = require('../images/pages/go.png')
const mongo = require('../images/pages/mongo.png')
const postgres = require('../images/pages/postgres.png')

//icons
let code: SemanticICONS = 'code';
let microchip: SemanticICONS = 'microchip';
let suitcase: SemanticICONS = 'suitcase';
let map: SemanticICONS = 'map';
let camera: SemanticICONS = 'camera';
let computer: SemanticICONS = 'camera';
let book: SemanticICONS = 'camera';
let beer: SemanticICONS = 'beer';


export const resumePageConsts = {
    heading: 'About Me:',
    subheading: <p>Hi! Thanks for taking the time to take a look through my resume. I'm Senior Software Engineer with 3 years of fulltime Experience. I've been working in the industry since 2017 (When I graduated). I've worked on Enterprise codebase and contributed to open-source projects. </p>,
}
 




export const expConstants = {
    heading: 'Work Experience', 
    icon: computer, 
    items: [
        {
            position: 'Senior Software Engineer',
            company: 'Bloomberg LLC',
            description: <p>Joined as a Senior Software Engineer</p>,
            image: bloomberg,
            location: 'Manhattan, NY',
            date: 'September 2020 - Ciur', 
        },
        {
            position: 'Software Engineer',
            company: 'We Company',
            description: <p>Created new service in GO that interacted with external services. Implemented new features on WeWork site to allow printing from anywhere and support page. Created new workflow and helped define CD/CI for web.</p>,
            image: wework,
            location: 'Manhattan, NY',
            date: 'March 2019 - September 2020', 
        },
        {
            position: 'Software Engineer',
            company: 'Amazon Inc.',
            description: <p>Worked on both backend projects and frontend Ones. Created pages in Java Spring and rewrote Audible's Checkout Flow. Also worked on Library adn Wishlist at Audible. Then worked to redefine listening on web for Audible by creating a POC to move towards a different Codec and standard for web player.  </p>,
            image: amazon,
            location: 'Manhattan, NY',
            date: 'January 2017 - March 2019', 
        },
        {
            position: 'Software Engineer Intern',
            company: 'AT&T',
            description: <p>Helped create program to run sentimental analysis using in-house NLP. Worked on a Nano-Cube Data Structure.</p>,
            image: att,
            location: 'Manhattan, NY',
            date: 'September 2016 - January 2017', 
        },
        {
            position: 'Software Engineer Intern',
            company: 'Johnson & Johnson',
            description: <p>Worked as a PMO intern in a Pharmaceutical subsidiary, worked to help make the workflow for project management organization more fluid.</p>,
            image: jnj,
            location: 'Manhattan, NY',
            date: 'January 2015 - June 2016', 
        },
    ],
}

export const eductionConstants = {
    heading: 'Education', 
    icon: book, 
    items: [
        {
            position: 'Computer Science & ITI',
            company: 'Rutgers University',
            description: <p>Double majored in Computer Science and ITI.</p>,
            image: rutgers,
            location: 'NJ',
            date: 'September 2012 - January 2017', 
        },
    ],
}






export const intrestsConstants=  {
    heading: 'My Intrests and Hobbies',
    icon: beer,
    items: [
        {
            heading: 'Coding',
            icon:  code,
            description: <p>I love trying to learn new things in our industry, I try to pick up on new languages and new tech whenever I can.</p>,
        },
        {
            heading: 'Technology',
            icon: microchip,
            description: <p>I love following the latest and greatest technologies. I'm also fascinated by how humans interact with new technologies and the impact of tech on human behavior. </p>,
        },
        {
            heading: 'Travel',
            icon: suitcase,
            description: <p>I love traveling to different places and trying to see new sights. I look forward to it every year. </p>,
        },
        {
            heading: 'Hiking',
            icon: map,
            description: <p>I love a good trail or mountain.</p>,
        },
        {
            heading: 'Photography',
            icon: camera,
            description: <p>I'm a amateur and am still learning, trying to get better at it.</p>,
        },
    ]
}

//Skills, basically just links to images of the skills
export const skillsProps = {
    links:[
        react,
        java,
        docker,
        node,
        go,
        mongo,
        postgres,

    ],
    icon: code,
    heading:'Skills',
}

