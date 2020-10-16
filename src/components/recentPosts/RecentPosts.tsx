import React from 'react'
import {Image, Grid, GridRow, Icon, Header, GridColumn} from 'semantic-ui-react'
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import Card from '../Card/Card';
import {CardProps} from '../Card/Card'

interface recentPostMultiProps{
    card1: CardProps,
    card2: CardProps,
    card3: CardProps,
}


const RecentPosts = (props: recentPostMultiProps) => {
    return (
        <Grid stackable columns='equal'>
            <GridRow style={{paddingBottom:'0px'}}>
                <Header inverted as='h1' textAlign='left'>
                        <div style={{padding:'0px 0px 0px 40px'}}> Recents <Icon inverted name ='rocket'/> </div>
                </Header>
            </GridRow>
            <GridRow style={{paddingTop:'0px'}}>
                <div style={{color:"grey", fontSize:'17px', padding: '0px 0px 0px 40px'}}> New Projects and recent blogposts:</div>
            </GridRow>
            <GridRow >
                <GridColumn textAlign='center'>
                    <Card {...props.card1}/>
                </GridColumn>
                <GridColumn>
                    <Card {...props.card2}/>
                </GridColumn>
                <GridColumn>
                    <Card {...props.card3}/>
                </GridColumn>
            </GridRow>
        </Grid>
    );
}

export default RecentPosts