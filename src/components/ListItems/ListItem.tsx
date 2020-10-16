import React from 'react';
import {Header, Grid, GridColumn, GridRow, Item, Icon, Divider} from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

type SingleListItemProps = {
    header: string, 
    type: string, 
    image: string, 
    description: JSX.Element,
}

type ListOfItemsProps = {
    header:string,
    icon: SemanticICONS,
    subHeading: string;
    items: SingleListItemProps[]
}
export const ListItem = (props: ListOfItemsProps) => {

    return(
            <Grid>
                <GridRow stretched>

                    <GridColumn width='4'></GridColumn>

                    <GridColumn width='8'>

                        <Header inverted as='h1'>
                            <Icon color='orange' name={props.icon}/>
                            {props.header}                            
                        </Header>
                        
                        <div style={{color:"grey", fontSize:'17px'}}>{props.subHeading}</div>
                        <br/>
                        <Divider></Divider>
                        <Item.Group divided>
                            {props.items.map(
                                (item) => {
                                    return(
                                        <Item>
                                            <Item.Image size='small' src={item.image} />
                
                                            <Item.Content>
                                                <Item.Header>{item.header}</Item.Header>
                                                <Item.Meta>
                                                    <span >{item.type}</span>
                                                </Item.Meta>
                                                <Item.Description>{item.description}</Item.Description>
                                            </Item.Content>
                                        </Item> 
                                    )
                                }
                            )}
 
                        </Item.Group>

                    </GridColumn>

                    <GridColumn width='4'></GridColumn>
                </GridRow>
                <GridRow>
                    <br/>
                    <br/>
                </GridRow>
            </Grid>

    )
}

export default ListItem;