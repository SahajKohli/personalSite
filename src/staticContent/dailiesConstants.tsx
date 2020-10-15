import React from 'react';

//images
const spark = require('../images/pages/spark.svg')
const notion = require('../images/pages/notion.png')
const cal = require('../images/pages/iCal.png')
const safari = require('../images/pages/safari.jpg')
const chrome = require('../images/pages/chrome.svg')
const postman = require('../images/pages/postman.svg')
const terminal = require('../images/pages/terminal.svg')
const solar = require('../images/pages/solar.png')
const powerline = require('../images/pages/powerline.png')
const docker = require('../images/pages/docker2.png')
const netlify = require('../images/pages/netlify.jpeg')
const heroku = require('../images/pages/heroku.jpg')
const s3 = require('../images/pages/s3.png')
const desk = require('../images/pages/desk.jpg')
const chair = require('../images/pages/chair.jpg')
const keyboard = require('../images/pages/keyboard.jpg')
const macbook = require('../images/pages/macbook.jpeg')
const monitor = require('../images/pages/35monitor.jpg')
const monitor2 = require('../images/pages/25monitor.jpg')
const mouse = require('../images/pages/mouse.jpg')
const camera = require('../images/pages/camera.jpg')
const lense = require('../images/pages/cameralense.jpg')
const ipad = require('../images/pages/ipad.jpg')
const pencil = require('../images/pages/pencil.jpeg')
const sketch = require('../images/pages/sketch.png')

const DailiesApplicaitons = {
    header: 'Applications',
    icon: 'app store',
    subHeading: 'My setup of Applications I use Daily',
    items:[
        {
            header: 'Email', 
            type: 'Spark', 
            image: spark , 
            description: <p>My favorite Email client after trying out a bunch.</p>,
        },
        {
            header: 'Notes', 
            type: 'Notion', 
            image: notion , 
            description: <p>Pretty much the only way I stay organized.</p>,
        },
        {
            header: 'Calendar', 
            type: 'iCal', 
            image: cal , 
            description: <p>The default mail client sync everything so it works really well for me.</p>,
        },
        {
            header: 'Browser', 
            type: 'Safari', 
            image: safari , 
            description: <p>I use safari to casually browse the web.</p>,
        },
        {
            header: 'Secondary Browser', 
            type: 'Chrome', 
            image: chrome , 
            description: <p>Chrome dev tools and Lighthouse being built in is a no brainer for web devlopment.</p>,
        },
        {
            header: 'API Devlopment', 
            type: 'Postman', 
            image: postman , 
            description: <p>I love using Postman to run through my endpoints and JSON.</p>,
        },

    ]
}
const DailiesTerminalSetup ={
    header: 'Terminal and Editors',
    icon: 'terminal',
    subHeading: 'My custom Terminal Setup',
    items:[
        {
            header: 'Terminal', 
            type: 'Bash', 
            image: terminal , 
            description: <p>I use the terminal on my mac, the move to zsh from Apple has made it easier to devlopment natively.</p>,
        },
        {
            header: 'Solarized Dark', 
            type: 'Terminal Font and Theme', 
            image: solar , 
            description: <p>I love dark mode on all things and solarized is my favorite theme by far.</p>,
        },
        {
            header: 'Powerline10k', 
            type: 'Terminal Theme', 
            image: powerline , 
            description: <p>This addition to your terminal allows you to see your git status and current directory rather then doing PWD everytime.</p>,
        },
    ]
}
const DailiesWorkStation = {
    header: 'Work Station',
    icon: 'desktop',
    subHeading: 'What my work station looks like',
    items:[
        {
            header: 'Autonomous Standing Desk', 
            type: 'Desk', 
            image: desk , 
            description: <p>I found this desk online when alot of people recommended it, its cheap and it works really well.</p>,
        },
        {
            header: 'Autonomous ErgoChair', 
            type: 'Chair', 
            image: chair , 
            description: <p>This chair is on the more expensive side but 100% worth it, it supports your back relly well.</p>,
        },
        {
            header: 'Macbook Pro 16 inch', 
            type: 'Computer', 
            image: macbook , 
            description: <p>My trusty work horse.</p>,
        },
        {
            header: 'Alienware 34inch Monitor', 
            type: 'Monitor', 
            image: monitor , 
            description: <p>I got this monitor to game on but works really well to code on as well. Ultrawides are amazing for having multiple VSCode windows.</p>,
        },
        {
            header: 'Dell 25inch Monitor', 
            type: 'Vertical Monitor', 
            image: monitor2 , 
            description: <p>I use this as a vertical Monitor to show my terminal. </p>,
        },
        {
            header: 'Logitech MX Master 3', 
            type: 'Mouse', 
            image: mouse , 
            description: <p>This mouse is amazing, the scroll wheel on it is perfect and I cannot reccomend it enough.</p>,
        },
        {
            header: 'Keychron Mechanical Keyboard', 
            type: 'Keyboard', 
            image: keyboard , 
            description: <p>I love mech. keyboards and I always return to this one because the feel.</p>,
        },
    ]
}
const DailiesPhotoGraphy = {
    header: 'Photographhy Dailies',
    icon: 'camera retro',
    subHeading: 'My camera and Assc.',
    items:[
        {
            header: 'Sony a6500', 
            type: 'Camera', 
            image: camera , 
            description: <p>My first and only camera, I love it so far.</p>,
        },
        {
            header: 'Sony 10-18mm Wide-Angle Lense', 
            type: 'Lense', 
            image: lense , 
            description: <p>This lense came with the camera, I use it for Landscape picture.</p>,
        },
        {
            header: 'Sony 18-105mm Lense', 
            type: 'Lense', 
            image: lense, 
            description: <p>I haven't gotten to use it that much , but exicted to try it out more.</p>,
        },

    ]
}
const DailiesDrawing = {
    header: 'Drawing Stuff',
    icon: 'pencil alternate',
    subHeading: 'What I use to draw',
    items:[
        {
            header: 'iPad', 
            type: 'Tablet', 
            image: ipad , 
            description: <p>I have an older iPad pro form 2017 but it works well to draw on.</p>,
        },
        {
            header: 'iPad Pencil', 
            type: 'Pen', 
            image: pencil , 
            description: <p>The pencil works really well with the ipad.</p>,
        },
        {
            header: 'Sketchbook', 
            type: 'Drawing App', 
            image: sketch , 
            description: <p>The app is free and I use it for all my drawing you see on the site.</p>,
        },
    ]
}
const DailiesHosting = {
    header: 'Hosting',
    icon: 'cloud',
    subHeading: 'How I host and deploy my code',
    items:[
        {
            header: 'Docker', 
            type: 'Containers', 
            image: docker , 
            description: <p>Pretty much the goto to containerize all the things.</p>,
        },
        {
            header: 'Netlify', 
            type: 'Hosting', 
            image: netlify , 
            description: <p>Its so easy to link it up to the git repo and make it work that I always come back to it.</p>,
        },
        {
            header: 'Heroku', 
            type: 'Services Hosting', 
            image: heroku , 
            description: <p>My favorite way to get my services up and running, the UI is great and CLI has great documentation.</p>,
        },
        {
            header: 'AWS S3', 
            type: 'Image Storage', 
            image: s3 , 
            description: <p>I will always run to my S3 for static files and the CLI is something I'm used to. </p>,
        },
    ]
}
export const DailiesProps = {
    dailies: [
        DailiesApplicaitons,
        DailiesTerminalSetup,
        DailiesHosting,
        DailiesWorkStation,
        DailiesPhotoGraphy,
        DailiesDrawing
    ],
    subHeading: 'A list of items and applications that I use daily, maybe you can try some of these out!',
}