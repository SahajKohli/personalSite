import React, {useState} from 'react';
import {Grid, GridRow, GridColumn, Button, Header} from 'semantic-ui-react';
import {Link} from '@reach/router';


const BadPath = () => {
    return(
        <div>
            <Grid>
                <GridColumn width ='4'></GridColumn>
                <GridColumn width ='8' textAlign='center'>
                    <GridRow>
                        <Header as='h1' color='grey'>
                            UH-OH You stumbled on a wrong path.
                        </Header>
                    </GridRow>
                    <GridRow><br/></GridRow>
                    <GridRow textAlign='center'>
                        <Link to='/'>
                            <Button  color='orange' >Beam me Back Scotty!</Button>
                        </Link>
                    </GridRow>
                    <GridRow>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </GridRow>
                    <GridRow>
                        <img src='https://images.dog.ceo/breeds/eskimo/n02109961_2369.jpg'/>
                    </GridRow>
                </GridColumn>
                <GridColumn width ='4'></GridColumn>
            </Grid>
        </div>
    )
}

export default BadPath  