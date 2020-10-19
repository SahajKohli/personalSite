import React, {useState, useEffect} from 'react';
import sanityClient from "../api/sanityClient";
import {Link} from '@reach/router'

export default function Blog() {
    const [allPostsData, setAllPosts] = useState(null);
 
   useEffect(() => {
     sanityClient
       .fetch(
         `*[_type == "post"]{
         title,
         slug,
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
   console.log(allPostsData);

   if(!allPostsData){
       console.log("null");
       return (<div style={{color: 'gray'}}>
           Nothing to see
       </div>)
   } else{
    return(
        <div>
        <h2>Blog Posts</h2>
        <h3>Welcome to my blog posts page!</h3>
        <div>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span key={index}>
                  <img src={post.mainImage.asset.url} alt="" />
                  <span>
                    <h2>{post.title}</h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
       );
   }
   
}
