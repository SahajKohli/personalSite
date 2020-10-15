import React from 'react';
import {Grid, GridColumn, GridRow, Icon, Header, Button} from 'semantic-ui-react';
import {contactMeConstants} from '../staticContent/contactMeConstants';

 const Contact = () => {
    return (
        <div>
            <Grid>
                <GridRow stretched>
                    <GridColumn width='2'></GridColumn>
                    <GridColumn width='5' textAlign='center'>
                        <Icon color ='orange' name={contactMeConstants.icon} size='massive'/>
                    </GridColumn>
                    <GridColumn width='6'>
                        <Header as='h1' color='orange'>{contactMeConstants.heading}</Header>
                        <div style={{color:'grey', fontSize:'15px'}}>
                            {contactMeConstants.desc}
                        </div>
                        <br/>
                        <div style={{color:'grey', fontSize:'15px'}}>
                            {contactMeConstants.contDesc}
                        </div>
                        <br/>
                        <div style={{textAlign:'center'}}>
                            <a href='https://www.linkedin.com/in/sahaj-kohli-1b975388'  >
                                <Icon name='linkedin' size='huge'/>
                            </a>
                        </div>

                    </GridColumn>
                    <GridColumn width='2'></GridColumn>

                </GridRow>
            </Grid>
        </div>
    )
}

export default Contact;