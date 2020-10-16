import React from 'react';
import {Divider, Grid, GridRow, GridColumn, Header} from 'semantic-ui-react'
import {ActionItem} from '../actions/ActionItem'
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

interface ActionsProps {
    actionItem1: {
        itemName: string;
        duration: number;
        animation: string;
        url: string;
        icon: SemanticICONS;
    }
    actionItem2: {
        itemName: string;
        duration: number;
        animation: string;
        url: string;
        icon: SemanticICONS;
    }
    actionItem3: {
        itemName: string;
        duration: number;
        animation: string;
        url: string;
        icon: SemanticICONS;
    }
}

const Actions = (props: ActionsProps) => {

    return (
        <div>
        <Grid stackable>
        <GridRow>
            <GridColumn width='2'>
            </GridColumn>

            <GridColumn width='12' >
            <Grid stackable>
                   <GridRow>
                       <GridColumn width='5' textAlign='center' >
                            <ActionItem itemName={props.actionItem1.itemName} duration= {props.actionItem1.duration} animation={props.actionItem1.animation} url={props.actionItem1.url} icon={props.actionItem1.icon}/>
                       </GridColumn>
                       <GridColumn width='6' textAlign='center'>
                            <ActionItem itemName={props.actionItem2.itemName} duration= {props.actionItem2.duration} animation={props.actionItem2.animation} url={props.actionItem2.url} icon={props.actionItem2.icon}/>
                       </GridColumn>
                       <GridColumn width='5' textAlign='center'>
                            <ActionItem itemName={props.actionItem3.itemName} duration= {props.actionItem3.duration} animation={props.actionItem3.animation} url={props.actionItem3.url} icon={props.actionItem3.icon}/>
                       </GridColumn>
                   </GridRow>
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
            </GridColumn>

            <GridColumn width='2'>
            </GridColumn>

        </GridRow>
        </Grid>
        </div>
    );
}

export default Actions