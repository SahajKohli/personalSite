import React from 'react';

export const sampleExp= {
    position: 'Software Engineer',
    company: 'Amazon Inc.',
    description: <p>Worked as a basica engineer sdoing some engineering things. I like the engineer the engineering things.</p>,
    image: 'http://iconicrealestate.com/wp-content/uploads/2018/03/amazon-logo.png',
    location: 'Manhattan, NY',
    date: 'Januarty 2017 - March 2019', 
}

interface expConstants {
    heading: string, 
    icon: string, 
    items: ExprienceItemProps[]
}

interface educationConstants {
    heading: string, 
    icon: string, 
    items: ExprienceItemProps[]
}

interface InterestItem{
    heading: string;
    description: JSX.Element,
}

interface intrestsConstants {
    heading: string;
    icon: string;
    items: InterestItem[],
}
interface SkillsProps{
    links:string[]
}

