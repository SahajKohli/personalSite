import React, {useState, useEffect} from 'react';
import sanityClient from "../api/sanityClient";
import { Dimmer, Loader, Image, Segment , Grid, GridColumn, GridRow, ItemDescription} from 'semantic-ui-react'
import {Link} from '@reach/router'
import BlogTile from '../components/blogTile/BlogTile';

export default function Blog() {
    const [allPostsData, setAllPosts] = useState(null);
   useEffect(() => {
     sanityClient
       .fetch(
         `*[_type == "post"]{
         title,
         slug,
         "name": author->name,
         "date": publishedAt,
         shortDesc,
         mainImage{
           asset->{
           _id,
           url
         }
       }
     }`
       )
       .then((data) => setAllPosts(data))
       .catch(console.error);
   }, []);
    
   

   if (!allPostsData) {
       return (
            <Dimmer active>
            <Loader>Hacking the MainFrame.....</Loader>
            </Dimmer>
       )
   } else{
    return (
        <div>
        <h2>Blog Posts</h2>
        <h3>Welcome to my blog posts page!</h3>
        <div>
            <Grid stackable  columns={3}>
            <GridRow >
                {allPostsData &&
          allPostsData.map((post, index) => (
              <GridColumn>
                  <BlogTile  link={"blogpost/" + post.slug.current} image={post.mainImage.asset.url} heading={post.title} date={post.date} description={post.shortDesc}/>
            </GridColumn>
          ))}

            </GridRow>
            </Grid>
        </div>
        </div>
   }
   
   
}
