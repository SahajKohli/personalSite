import React from 'react'
import {Grid, GridRow, GridColumn} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown'


interface BlogpostProps {
    id:string,
    header: string,
    date: string,
    author: string, 
    metadata: string,
    tags: string, 
    topic: string, 
    subheading: string, 
    markdownlocation: string,

}

const Blogpost = () => {
    console.log('loaded')
    return(
        <div className='blogpost' color='white'>
            <ReactMarkdown source={'../staticContent/sample.md'} />
        </div>
    )

}


export default Blogpost