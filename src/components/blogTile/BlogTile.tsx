import React from 'react'
import {Grid, GridColumn, GridRow, Icon} from 'semantic-ui-react';
import {Link} from '@reach/router';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import '../../styles/blogTile.css';

export interface CardProps{
    image: string,
    heading: string,
    date: string,
    description: JSX.Element,
    link: string,
}

const BlogTile =(props: CardProps) => {

    return (
        <a href={props.link}>
            <div className='blogtile' >
                <img className='image' src ={props.image} />

                <div className='data'>
                    <div className='heading'>{props.heading}</div>
                    <div className='date'>{props.date}</div>
                    <div className='description'>{props.description}</div>
                    <br/>
                </div>
            </div>
        </a>

    )

}

export default BlogTile;