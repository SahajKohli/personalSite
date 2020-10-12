import React from 'react'
import {Image, Header, Grid, Segment} from 'semantic-ui-react'
import userImage from '../../images/me.PNG';

interface IndexHedProps{
    hed: string, 
    lede: string,
}

const IndexHed = (props: IndexHedProps) => {
    return (
        <div>
            <Segment inverted>
            <Grid inverted>
                    <Grid.Row stretched>
                        <Grid.Column width={5}>
                        </Grid.Column>
                        <Grid.Column width={3} textAlign= 'right' verticalAlign='middle'>
                            <Image src={userImage} size='small'/>
                        </Grid.Column>

                        <Grid.Column width={3} textAlign= 'left' verticalAlign='bottom'>
                            <Grid.Row>
                                <Header inverted as='h1'>{props.hed}</Header>
                            </Grid.Row>
                            <Grid.Row>
                                <Header inverted as='h1'>{props.lede}</Header>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={8}>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
 
        </div>
    );
}

export default IndexHed