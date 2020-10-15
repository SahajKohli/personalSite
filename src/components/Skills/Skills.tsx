import React from 'react';
import {Header, Item, Grid, GridRow, GridColumn, Divider, Icon} from 'semantic-ui-react';


interface SkillsProps{
    heading: string,
    ison: string,
    links:string[]
}


const Skills = (props:SkillsProps) => {
    return(
        <div>
            <Grid>
                <GridRow stretched>
                    <GridColumn width ='2'></GridColumn>
                    <Header inverted as='h1'>
                            <Icon color='orange' name={props.icon}/>
                            {props.heading}                            
                    </Header>
                    <GridColumn width='12'>
                        <Grid  columns='equal'>
                            <GridRow stretched>
                                {props.links.map( (item) => {
                                    return(
                                        <GridColumn >
                                            <Item>
                                                <Item.Image size='small' src={item} />
                                            </Item> 
                                        </GridColumn>
                                    )
                                } )}
                            </GridRow>
                        </Grid>
                    </GridColumn>
                    <GridColumn width ='2'></GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn width='2'></GridColumn>
                    <GridColumn width='12'>
                        <Divider inverted />
                    </GridColumn>
                    <GridColumn width='2'></GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
}

export default Skills;