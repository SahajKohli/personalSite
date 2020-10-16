import React from 'react'
import {Image, Grid, GridRow, Icon, Header, Card, GridColumn} from 'semantic-ui-react'
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

interface recentPostProps{
    image: JSX.Element,
    header: string,
    metaData: string,
    description: JSX.Element,
    link: string,
    icon: SemanticICONS,
    linkDec: string,
}

interface recentPostMultiProps{
    card1: recentPostProps,
    card2: recentPostProps,
    card3: recentPostProps,
}
const sampleCard = (input: recentPostProps) =>{
    return(
    <Card>
    <Image style={{filter:'grayscale(50%)'}} src={input.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{input.header}</Card.Header>
      <Card.Meta>
        <span className='date'>{input.metaData}</span>
      </Card.Meta>
      <Card.Description>
        {input.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={input.link}>
        <Icon name={input.icon} />
        {input.linkDec}
      </a>
    </Card.Content>
  </Card>
    );
}

const RecentPosts = (props: recentPostMultiProps) => {
    return (
        <div>
            <br/>

            <Grid stackable>
                <GridRow stretched>
                    <GridColumn width ='7'>
                        <Header inverted as='h1' textAlign='left'>
                            <div style={{padding:'0px 0px 0px 40px'}}> Recents <Icon inverted name ='rocket'/> </div>
                        </Header>
                        <div style={{color:"grey", fontSize:'17px', padding: '0px 0px 0px 40px'}}> New Projects and recent blogposts:</div>
                    </GridColumn>
                    <GridColumn width ='4'> 
                    </GridColumn>
                    <GridColumn width ='2'></GridColumn>
                    <GridColumn width ='2'></GridColumn>
                </GridRow>
                <GridRow stretched>
                    <GridColumn width ='2'>
                    </GridColumn>
                    <GridColumn width ='4'>
                        {sampleCard(props.card1)}
                    </GridColumn>
                    <GridColumn width ='4'>
                        {sampleCard(props.card2)}
                    </GridColumn>
                    <GridColumn width ='4'>
                        {sampleCard(props.card3)}
                    </GridColumn>
                    <GridColumn width ='1'>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    
                </GridRow>
            </Grid>
        </div>
    );
}

export default RecentPosts