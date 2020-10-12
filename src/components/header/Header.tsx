import React from 'react'
import {Segment, Menu, Container, Button, Icon, Grid, GridColumn, GridRow} from 'semantic-ui-react'
import '../../semantic/dist/semantic.min.css';

const Header = () => {

    return (
        <div>
            <Grid inverted>
                <GridRow>

                </GridRow>
                <Grid.Row >
                    <GridColumn width='1'>
                    <Button  inverted icon='sidebar' />

                    </GridColumn>
                    <GridColumn width='1'>
                    <Button inverted icon='home' />

                    </GridColumn>

                    <GridColumn width='9'>

                    </GridColumn>
                    <GridColumn width='1'>
                        <Button inverted circular icon='github' />
                    </GridColumn>
                    <GridColumn width='2'>
                        <Button.Group >
                            <Button inverted>About</Button>
                            <Button inverted>Daily</Button>
                            <Button inverted>Contact</Button>
                        </Button.Group>
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>

                </Grid.Row>
                <Grid.Row>
                    
                    </Grid.Row>
                    <Grid.Row>
                    
                    </Grid.Row>
            </Grid>
        </div>    
    );
}

export default Header