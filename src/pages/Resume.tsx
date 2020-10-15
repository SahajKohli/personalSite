import React from 'react';
import {Header, Divider, Grid, Image } from 'semantic-ui-react';
import Expirences from '../components/Expirences/Expirences';
import Skills from '../components/Skills/Skills';
import Intrests from '../components/Interests/Interests';
const userImage =  require("../images/me.png");
import {intrestsConstants, eductionConstants, expConstants, skillsProps, resumePageConsts} from '../staticContent/resumeConstants';


 const Resume = () => {
    return (
        <div>  
            <div style={{textAlign:'center'}}>
                <Header color ='grey' as='h3'></Header>
                <br/>
            </div>
            <Grid inverted>
                    <Grid.Row stretched>
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={3} textAlign= 'right' verticalAlign='middle'>
                            <Image src={userImage} size='tiny'/>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={5} textAlign= 'left' verticalAlign='middle'>
                            <Grid.Row>
                                <Header inverted as='h1'>{resumePageConsts.heading}</Header>
                            </Grid.Row>
                            <div style={{color: 'grey', fontSize:'15px'}}>
                                {resumePageConsts.subheading}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            <Expirences heading={expConstants.heading} icon={expConstants.icon} items={expConstants.items}/>
            <Expirences heading={eductionConstants.heading} icon={eductionConstants.icon} items={eductionConstants.items}/>
            <Skills links={skillsProps.links} icon={skillsProps.icon} heading={skillsProps.heading}/>
            <Intrests heading={intrestsConstants.heading} icon={intrestsConstants.icon} items={intrestsConstants.items}/>
        </div>
    )
}

export default Resume;