import React, { useEffect, useState } from "react";
import sanityClient from "../api/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url"
import { Router, RouteComponentProps, Link } from "@reach/router"
import { Dimmer, Loader, Image, Segment, Grid, GridRow, GridColumn } from 'semantic-ui-react'
import '../styles/blogpost.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

interface BlogpostProps extends RouteComponentProps
{
	slugID: string;
}

export default function Blogpost(props: BlogpostProps){
    const [postData, setPostData] = useState(null);
    const slug= props.slugID.slice(10);
    console.log(slug);
    useEffect(() => {
        sanityClient
          .fetch(
            `*[slug.current == $slug]{
              title,
              slug,
              mainImage{
                asset->{
                  _id,
                  url
                 }
               },
             body,
            "name": author->name,
            "authorImage": author->image
           }`,
            { slug }
          )
          .then((data) => setPostData(data[0]))
          .catch(console.error);
      }, [slug]);
      
      if (!postData) {
        return (
            <Dimmer active>
              <Loader>Hacking the MainFrame.....</Loader>
            </Dimmer>
      
           )
      };

      console.log(urlFor(postData.mainImage).url());
      return (
            <Grid>
                <GridRow>
                    <GridColumn width='3'></GridColumn>
                    <GridColumn width='10'>
                        <GridRow>
                            <br/>
                            <br/>
                        </GridRow>
                        <GridRow className='header' style={{backgroundImage: `url(${urlFor(postData.mainImage).url()})`}}>
                            <Grid>
                                <GridColumn width= '4'></GridColumn>
                                <GridColumn width= '8'>
                                    <div className='headerMeta'>
                                        <div className='headerTitle'>
                                            {postData.title}
                                        </div>
                                        <div className='author'>
                                            <img className='authorImage' src ={urlFor(postData.authorImage).url()} />
                                            <div className='authorName'>
                                                {postData.name}
                                            </div>
                                        </div>
                                    </div>
                               
                                </GridColumn>
                                <GridColumn width= '4'></GridColumn>
                            </Grid>
                            
                        </GridRow>
                    </GridColumn>
                    <GridColumn width='3'></GridColumn>
                </GridRow>
            </Grid>            
      );
}
