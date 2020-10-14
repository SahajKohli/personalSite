import React from 'react';
import ExpItem from '../components/Expirences/ExpirenceItem';
import {sampleExp} from '../staticContent/resumeConstants';
import {Header, Divider} from 'semantic-ui-react';
import Expirences from '../components/Expirences/Expirences';
import Skills from '../components/Skills/Skills';
import Intrests from '../components/Interests/Interests';

 const Resume = () => {
    return (
        <div>  
            <div style={{textAlign:'center'}}>
                <Header color ='grey' as='h3'></Header>
                <br/>
            </div>
            <Expirences/>
            <Divider/>
            <Expirences/>
            <Divider/>
            <Skills/>
            <Divider/>
            <Intrests/>
        </div>
    )
}

export default Resume;