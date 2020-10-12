
import React from 'react';

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