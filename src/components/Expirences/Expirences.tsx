import React from 'react';
import {ExprienceItemProps} from '../Expirences/ExpirenceItem';
import ExprienceItem from '../Expirences/ExpirenceItem';
import {Grid, GridRow, GridColumn, Header, Icon} from 'semantic-ui-react';


interface ExpirencesProps {
    heading: string, 
    icon: string, 
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
                    <GridColumn width='12'>
                        {props.items.map( (item) => {
                            
                            return(
                                <ExprienceItem position={item.position} company={item.company} date={item.date} description={item.description} image={item.image} location={item.location}/>
                            )
                        })}
                    </GridColumn>

                    <GridColumn width='2'></GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

export default Expirences;