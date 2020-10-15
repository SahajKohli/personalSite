import React from 'react';

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

export const resumePageConsts = {
    heading: 'About Me:',
    subheading: <p>Hi! Thanks for taking the time to take a look through my resume. I'm Senior Software Engineer with 3 years of fulltime Expirence. I've been working in the indsutry since 2017 (When I graduated). I've worked on Enterprise codebases and contributed to opensource code bases. </p>,
}

export const expConstants = {
    heading: 'Work Experience', 
    icon: 'computer', 
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
            description: <p>Created new services in GO, also created new expirences in ReactJS. Created new workflow and helped define CD/CI for web.</p>,
            image: wework,
            location: 'Manhattan, NY',
            date: 'March 2019 - September 2020', 
        },
        {
            position: 'Software Engineer',
            company: 'Amazon Inc.',
            description: <p>Worked on both backend projects and frontend Ones. Created pages in Java Spring and rewrote Audible's Checkout Flow. Also worked on Library adn Wishlist at Audible. Then worked to redefine listening on web for Audible, created POC to move towards open-source tech and the implemented the architecture.  </p>,
            image: amazon,
            location: 'Manhattan, NY',
            date: 'January 2017 - March 2019', 
        },
        {
            position: 'Software Engineer Intern',
            company: 'AT&T',
            description: <p>Helped create program to run sentimental analysis using in house NLP. Worked on Nano-Cube Data Structure.</p>,
            image: att,
            location: 'Manhattan, NY',
            date: 'September 2016 - January 2017', 
        },
        {
            position: 'Software Engineer Intern',
            company: 'Johnson & Johnson',
            description: <p>Worked as a PMO intern in a Pharamaseutical subsidiary, to help make the workflow for project management orginzation more fluid.</p>,
            image: jnj,
            location: 'Manhattan, NY',
            date: 'January 2015 - June 2016', 
        },
    ],
}

export const eductionConstants = {
    heading: 'Education', 
    icon: 'book', 
    items: [
        {
            position: 'Computer Science & ITI',
            company: 'Rutgers University',
            description: <p>Double majored in computer science and ITI.</p>,
            image: rutgers,
            location: 'NJ',
            date: 'September 2012 - January 2017', 
        },
    ],
}



export const intrestsConstants=  {
    heading: 'My Intrests and Hobbies',
    icon: 'beer',
    items: [
        {
            heading: 'Coding',
            icon:'code',
            description: <p>I love trying to learn new things in our industry, I try to pick up on new languages and new tech whenver I can. I attend virtual conferences to stay ahead of the market and the industry of new trends all the time.</p>,
        },
        {
            heading: 'Technology',
            icon:'microchip',
            description: <p>From the latest ARM chip to the newest iPhone, I love and follow all things tech. I also love reading about how technology is chaning humans and influencing our society.</p>,
        },
        {
            heading: 'Travel',
            icon:'suitcase',
            description: <p>I love traveling to differnet places and trying to see new sights. I look forward to it every year. </p>,
        },
        {
            heading: 'Hiking',
            icon:'map',
            description: <p>I love a good trail or mountain.</p>,
        },
        {
            heading: 'Photography',
            icon:'camera',
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
    icon:'code',
    heading:'Skills',
}

