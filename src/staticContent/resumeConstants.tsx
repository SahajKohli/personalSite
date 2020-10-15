import React from 'react';

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
            image: 'https://www.greenamerica.org/sites/default/files/styles/wide350/public/2017-05/bloomberglp.jpg',
            location: 'Manhattan, NY',
            date: 'March 2019 - September 2020', 
        },
        {
            position: 'Software Engineer',
            company: 'We Company',
            description: <p>Created new services in GO, also created new expirences in ReactJS. Created new workflow and helped define CD/CI for web.</p>,
            image: 'https://connectedremag.com/wp-content/uploads/2018/06/wework.jpg',
            location: 'Manhattan, NY',
            date: 'March 2019 - September 2020', 
        },
        {
            position: 'Software Engineer',
            company: 'Amazon Inc.',
            description: <p>Worked on both backend projects and frontend Ones. Created pages in Java Spring and rewrote Audible's Checkout Flow. Also worked on Library adn Wishlist at Audible. Then worked to redefine listening on web for Audible, created POC to move towards open-source tech and the implemented the architecture.  </p>,
            image: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/012015/amazon-logo-rgb.png?itok=VaPUAQJF',
            location: 'Manhattan, NY',
            date: 'January 2017 - March 2019', 
        },
        {
            position: 'Software Engineer Intern',
            company: 'AT&T',
            description: <p>Helped create program to run sentimental analysis using in house NLP. Worked on Nano-Cube Data Structure.</p>,
            image: 'https://images.techhive.com/images/article/2014/04/att-logo-100262596-large.jpg',
            location: 'Manhattan, NY',
            date: 'September 2016 - January 2017', 
        },
        {
            position: 'Software Engineer Intern',
            company: 'Johnson & Johnson',
            description: <p>Worked as a PMO intern in a Pharamaseutical subsidiary, to help make the workflow for project management orginzation more fluid.</p>,
            image: 'https://www.logotaglines.com/wp-content/uploads/2020/04/Johnson-Johnson-Logo.jpg',
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
            image: 'https://scarletknights.com/images/2020/6/23/R_W_B_S.png',
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
        'https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png',
        'https://www.flaticon.com/svg/static/icons/svg/121/121152.svg',
        'https://www.flaticon.com/svg/static/icons/svg/919/919853.svg',
        'https://www.techwell.com/sites/default/files/stories/images/cropped_teasers/Beth%20Romanik/2019/node-js-tutorial.png',
        'https://blog.golang.org/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
        'https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png',
        'https://dyltqmyl993wv.cloudfront.net/assets/stacks/postgresql/img/postgresql-stack-110x117.png',




    ]
}

