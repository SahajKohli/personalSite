import React from 'react';
import {Grid, GridRow, GridColumn, Header} from 'semantic-ui-react';

export type ExprienceItemProps = {
    position: string,
    company: string,
    description: JSX.Element,
    image: string,
    location: string,
    date: string 

}

const ExprienceItem =(props: ExprienceItemProps)=>{
    console.log("Hey, you're using devTools. Cool! Take a look at my source code and let me know if there's something i can improve")
    
    return(
        <div className ='expItem'>
            <Grid>
                <GridRow stretched>
                    <GridColumn width='2'></GridColumn>
                    <GridColumn width='4' textAlign='center'>
                        <img style={{
                            borderRadius: '20%',
                        }} src={props.image}/>
                    </GridColumn>
                    <GridColumn width='7'>
                        <Grid>
                            <GridColumn width='1'>

                            </GridColumn>
                            <GridColumn width='15'>
                                <GridRow verticalAlign='bottom'>
                                    <Header color='grey' as='h4'>
                                        {props.date}
                                        <span> | </span>
                                        {props.location}
                                    </Header>
                                </GridRow>
                                <GridRow><br/></GridRow>
                                <GridRow>
                                    <Header inverted as='h1'>
                                        {props.company}
                                    </Header>
                                </GridRow>
                                <GridRow verticalAlign='top'>
                                    <Header color='orange' as='h3'>
                                        {props.position}
                                    </Header>
                                </GridRow>
                                <GridRow><br/></GridRow>

                                <GridRow>
                                    <div style={{
                                        color:'grey'
                                    }}>
                                        {props.description}
                                    </div>
                                </GridRow>
                            </GridColumn>
                        </Grid>
                    </GridColumn>
                    <GridColumn width='2'></GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default ExprienceItem;