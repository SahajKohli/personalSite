import React, {useEffect, useState}  from 'react';
import {Link } from '@reach/router';
import sanityClient from './sanityClient';

export const getAllBlogItems= () => {
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
   console.log(allPostsData)
   return allPostsData;
 
 }