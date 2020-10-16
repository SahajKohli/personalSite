import React from 'react'
import {Grid, GridColumn, GridRow, Icon} from 'semantic-ui-react';
import {Link} from '@reach/router';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import '../../styles/card.css';

export interface CardProps{
    image: string,
    heading: string,
    metaData: string,
    description: JSX.Element,
    link: string,
    icon: SemanticICONS,
    linkDec: string,
}

const Card =(props: CardProps) => {

    return (
        <div className='card'>
            <img className='image' src ={props.image} />

            <div className='data'>
                <div className='heading'>{props.heading}</div>
                <div className='metadata'>{props.metaData}</div>
                <div className='description'>{props.description}</div>
                <br/>
                <div className='bottom'>
                    <Link to={props.link} className='link'>
                        <Icon name ={props.icon}/>
                        {props.linkDec}
                    </Link>
                </div>
            </div>

        </div>
    )

}

export default Card;