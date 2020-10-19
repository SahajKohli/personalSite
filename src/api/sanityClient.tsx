import sanityClient from "@sanity/client";
import React, {useEffect, useState} from 'react';

export default sanityClient({
    projectId: "gd59zjo4", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    useCdn: true,
  });

