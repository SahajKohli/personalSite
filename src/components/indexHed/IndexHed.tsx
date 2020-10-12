import React from 'react'
import {Image, Header, Grid, Divider, GridRow, GridColumn} from 'semantic-ui-react'
import userImage from '../../images/me.PNG';
import '../../semantic/dist/semantic.min.css';
import TextLoop from 'react-text-loop';


interface IndexHedProps{
    hed: string, 
    lede: string,
    secondLede: string, 
    listOfThings:{
        first: string,
        second: string, 
        third: string,
        forth: string,
        fifth: string
    }
}

const IndexHed = (props: IndexHedProps) => {
    return (
        <div>
            <Grid inverted>
                    <Grid.Row stretched>
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign= 'right' verticalAlign='middle'>
                            <Image src={userImage} size='medium'/>
                        </Grid.Column>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={3} textAlign= 'left' verticalAlign='middle'>
                            <Grid.Row>
                                <Header inverted as='h1'>{props.hed}</Header>
                            </Grid.Row>
                            <Grid.Row>
                                <Header inverted as='h1'>{props.lede}</Header>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={3}>
                        </Grid.Column>

                        <Grid.Column width={5} textAlign='right'>
                            <Header inverted as='h2'>{props.secondLede}</Header> 
                            <div> h </div>
                        </Grid.Column>

                        <Grid.Column width={5} floated='right' className='removePadding'>
                            
                            <Header inverted as='h2' color='orange' >
                                <TextLoop>
                                    <span>{props.listOfThings.first}</span>
                                    <span>{props.listOfThings.second}</span>
                                    <span>{props.listOfThings.third}</span>
                                    <span>{props.listOfThings.forth}</span>
                                    <span>{props.listOfThings.fifth}</span>
                                </TextLoop>
                            </Header>
                        </Grid.Column>

                        <Grid.Column width={3}>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
                <Grid>
                    <GridRow>
                        <GridColumn width='3'>

                        </GridColumn>
                        <GridColumn width='10'>
                            <Divider section />
                        </GridColumn>
                        <GridColumn width='3'>

                        </GridColumn>
                    </GridRow>
                </Grid>
                
 
        </div>
    );
}

export default IndexHed