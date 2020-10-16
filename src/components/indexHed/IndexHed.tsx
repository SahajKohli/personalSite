import React from 'react'
import {Image, Header, Grid, Divider, GridRow, GridColumn} from 'semantic-ui-react'
import TextLoop from 'react-text-loop';
require( '../../semantic/dist/semantic.min.css');

const userImage =  require("../../images/me.png")

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
            <Grid inverted stackable >
                    <Grid.Row stretched >
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign= 'right' verticalAlign='middle'>
                            <Image src={userImage}/>
                        </Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={5} textAlign= 'left' verticalAlign='middle'>
                                <Grid.Row>
                                    <Header inverted as='h1'>{props.hed}</Header>
                                </Grid.Row>
                                <Grid.Row>
                                    <Header inverted as='h1'>{props.lede}</Header>
                                </Grid.Row>
                                <GridRow><br/></GridRow>
                                <GridRow textAlign='left'>
                                        <Grid.Column width={3}>
                                            <Header inverted as='h2'>{props.secondLede}</Header> 
                                        </Grid.Column>

                                        <Grid.Column width={13} floated='left' className='removePadding'>
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

                                </GridRow>
                        </Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                    </Grid.Row>
                    
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