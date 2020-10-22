import React, { useEffect, useState } from "react";
import sanityClient from "../api/sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Router, RouteComponentProps, Link } from "@reach/router"
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

interface BlogpostProps extends RouteComponentProps
{
	slugID: string;
}

export default function OnePost(props: BlogpostProps) {
  const [postData, setPostData] = useState(null);
  const slug= props.slugID.slice(10);

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

  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
        <div>
          <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author is Kap"
          />
          <h4>{postData.name}</h4>
        </div>
      </div>
      <img src={urlFor(postData.mainImage).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
}