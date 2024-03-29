import React from 'react';
import {Grid, GridColumn, GridRow, Item, Icon, Header, ItemDescription} from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

interface InterestItem{
    heading: string;
    icon: SemanticICONS;
    description: JSX.Element,
}

interface IntrestsProps {
    heading: string;
    icon: SemanticICONS;
    items: InterestItem[],
}


const Intrests = (props: IntrestsProps) =>{
   
    return (
        <div className='expirence'>
            <Grid>
                <GridRow stretched>
                    <GridColumn width='4'></GridColumn>
                    <GridColumn width='8'>
                    <Header inverted as='h1'>
                            <Icon color='orange' name={props.icon}/>
                            {props.heading}                            
                        </Header>
                        <Item.Group>
                            {props.items.map((item) => {
                                return (
                                    <Item>
                                        <Item.Content>
                                            <Item.Header as='a'>{item.heading}
                                                <span>   </span>
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