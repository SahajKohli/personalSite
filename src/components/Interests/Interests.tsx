import React from 'react';
import {Grid, GridColumn, GridRow, Item, Icon, Header, ItemDescription} from 'semantic-ui-react';

interface InterestItem{
    heading: string;
    icon: string;
    description: JSX.Element,
}

interface IntrestsProps {
    heading: string;
    icon: string;
    items: InterestItem[],
}


const Intrests = (props: IntrestsProps) =>{
   
    return (
        <div className='expirence'>
            <Grid>
                <GridRow stretched>
                    <GridColumn width='2'></GridColumn>
                        <Header inverted as='h1'>
                            <Icon color='orange' name={props.icon}/>
                            {props.heading}                            
                        </Header>
                    <GridColumn width='12'>
                        <Item.Group>
                            {props.items.map((item) => {
                                return (
                                    <Item>
                                        <Item.Content>
                                            <Item.Header as='a'>{item.heading}
                                                <Icon color='orange' name={item.icon}/>
                                            </Item.Header>
                                            <Item.Description>
                                                {item.description}
                                            </Item.Description>
                                        </Item.Content>
                                    </Item>
                                )
                            })}
                        </Item.Group>
                    </GridColumn>

                    <GridColumn width='2'></GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
}

export default Intrests;