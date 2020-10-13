
import React from 'react';
import facialRecog from '../images/facial.jpg';
import data from '../images/data.jpg';
import onepicturesample from '../images/picto.png';
import {SemanticICONS}  from 'semantic-ui-react/dist/commonjs/generic';


export const indexHedeConstants =  {
    indexHed_hed : "Hi,",
    indexHed_lede: "I'm Sahaj",
    indexHed_secondLede: "I am a",
    indexHed_listOfThings: {
        first: 'Backend Engineer',
        second: 'Frontend Engineer',
        third: 'Services Architect',
        forth: 'FullStack Engineer',
        fifth: 'Writer'
    }

}

export const IndexLedeblurb = (
    <p>
      I'm a <span style={{color:"#f2711c"}} >fullstack Engineer</span> based in the US <span>🇺🇸. </span>
       I've worked with everything from  <span style={{color:"#f2711c"}} >Enterprise Java</span> to <span style={{color:"#f2711c"}} >React</span>. 
       I've used everything from  <span style={{color:"#f2711c"}} >Docker</span> to <span style={{color:"#f2711c"}} >Netlify </span>. I love coding and I'm always down to talk shop.
       I also <span style={{color:"#f2711c"}} >blog </span> and <span style={{color:"#f2711c"}} >give talks </span> about my expierences as a Senior Engineer.
    </p>
  )


  export const ActionItems = {
        actionItem1: {
            itemName: 'Resume',
            duration: 1200,
            animation: 'tada',
            url: '/resume',
            icon: 'code',
        },
        actionItem2: {
            itemName: 'Dailies',
            duration: 1200,
            animation: 'jiggle',
            url: '/dailies',
            icon: 'desktop',
        },
        actionItem3: {
            itemName: 'Connect',
            duration: 1200,
            animation: 'bounce',
            url:'connect',
            icon: 'mail',
        }
  }
  
  export const multicards = {
      card1:{
        image: facialRecog,
        header: 'Gatsby Facial Recognization',
        metaData: '08/03/2020',
        description: <p>A Gatsby site that allows users to upload a picture and see how closely they are to looking like Will Ferrel </p>,
        link: 'https://github.com/SahajKohli/Facial-Recognition-ML-Gatsby/tree/master/facial-recog',
        icon: 'github',
        linkDec: 'Github Link',
      },
      card2:{
        image: data,
        header: 'Daily Algoryhtm Site',
        metaData: '9/13/2020',
        description: <p>A site I created to bascially post data structure questions daily and their solutions</p>,
        link: 'https://sahajkohli.github.io/dailyQuestion/',
        icon: 'github',
        linkDec: 'Site Link',
      },
      card3:{
        image: onepicturesample,
        header: 'Pictogram',
        metaData: '10/03/2020',
        description: <p>A gallery that allows you to scroll over images and shows metadata</p>,
        link: 'https://github.com/SahajKohli/Pictogram',
        icon: 'github',
        linkDec: 'Github Link',
      }
  }