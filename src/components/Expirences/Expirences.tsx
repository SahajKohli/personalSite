import React from 'react';
import {ExprienceItemProps} from '../Expirences/ExpirenceItem';
import ExprienceItem from '../Expirences/ExpirenceItem';
import {Grid, GridRow, GridColumn, Header, Icon, Divider} from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';


interface ExpirencesProps {
    heading: string, 
    icon: SemanticICONS, 
    items: ExprienceItemProps[]
}

const Expirences = (props: ExpirencesProps) => {
    return (
        <div className='expirence'>
            <Grid>
                <GridRow stretched>
                    <GridColumn width='2'></GridColumn>
                    <Header inverted as='h1'>
                            <Icon color='orange' name={props.icon}/>
                            {props.heading}                            
                    </Header>
                    <GridColumn width='14'>
                        <br/>
                        {props.items.map( (item) => {
                            
                            return(
                                <ExprienceItem position={item.position} company={item.company} date={item.date} description={item.description} image={item.image} location={item.location}/>
                            )
                        })}
                    </GridColumn>

                    <GridColumn width='2'></GridColumn>
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
    )
}

export default Expirences;