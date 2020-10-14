import React from 'react';

const DailiesApplicaitons = {
    header: 'Applications',
    icon: 'app store',
    subHeading: 'My setup of Applications I use Daily',
    items:[
        {
            header: 'Email', 
            type: 'Spark', 
            image: 'https://sparkmailapp.com/img/spark2/common/spark.svg' , 
            description: <p>My favorite Email client after trying out a bunch.</p>,
        },
        {
            header: 'Notes', 
            type: 'Notion', 
            image: 'https://upload.wikimedia.org/wikipedia/en/4/45/Notion_app_logo.png' , 
            description: <p>Pretty much the only way I stay organized.</p>,
        },
        {
            header: 'Calendar', 
            type: 'iCal', 
            image: 'https://help.apple.com/assets/5E1912A2094622D13119F732/5E1912A5094622D13119F739/en_US/46c1924d468fba0321b8e4a8a1ed8098.png' , 
            description: <p>The default mail client sync everything so it works really well for me.</p>,
        },
        {
            header: 'Browser', 
            type: 'Safari', 
            image: 'https://photos5.appleinsider.com/gallery/37034-69302-Safari-Dev-Icon-xl.jpg' , 
            description: <p>I use safari to casually browse the web.</p>,
        },
        {
            header: 'Secondary Browser', 
            type: 'Chrome', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg' , 
            description: <p>Chrome dev tools and Lighthouse being built in is a no brainer for web devlopment.</p>,
        },
        {
            header: 'API Devlopment', 
            type: 'Postman', 
            image: 'https://www.postman.com/assets/api-5000.svg' , 
            description: <p>I love using Postman to run through my endpoints and JSON.</p>,
        },

    ]
}
const DailiesTerminalSetup ={
    header: 'Terminal and Editors',
    icon: 'terminal',
    subHeading: 'My custom Terminal Setup',
    items:[
        {
            header: 'Terminal', 
            type: 'Bash', 
            image: 'https://www.brandeps.com/logo-download/T/Terminal-logo-vector-01.svg' , 
            description: <p>I use the terminal on my mac, the move to zsh from Apple has made it easier to devlopment natively.</p>,
        },
        {
            header: 'Solarized Dark', 
            type: 'Terminal Font and Theme', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Solarized_Yin_Yang_logo.png' , 
            description: <p>I love dark mode on all things and solarized is my favorite theme by far.</p>,
        },
        {
            header: 'Powerline10k', 
            type: 'Terminal Theme', 
            image: 'https://camo.githubusercontent.com/424d512c13e8930e126a4f4b5abaf4923282bade/68747470733a2f2f692e696d6775722e636f6d2f5063316a4752762e706e67' , 
            description: <p>This addition to your terminal allows you to see your git status and current directory rather then doing PWD everytime.</p>,
        },
    ]
}
const DailiesWorkStation = {
    header: 'Work Station',
    icon: 'desktop',
    subHeading: 'What my work station looks like',
    items:[
        {
            header: 'Autonomous Standing Desk', 
            type: 'Desk', 
            image: 'https://thumbor.autonomous.ai/o9IEEXcsFipw3P6sfMDK0NnJpz4=/1600x900/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/product/image/smartdesk-2-home-1.1_16.37_17.1881_2.4-1585038643917.jpg' , 
            description: <p>I found this desk online when alot of people recommended it, its cheap and it works really well.</p>,
        },
        {
            header: 'Autonomous ErgoChair', 
            type: 'Chair', 
            image: 'https://thumbor.autonomous.ai/dx1EbS_36CCXlSt3NkMlpETv-5k=/1600x900/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/product/galleries/20.53--1585042755437.jpg' , 
            description: <p>This chair is on the more expensive side but 100% worth it, it supports your back relly well.</p>,
        },
        {
            header: 'Macbook Pro 16 inch', 
            type: 'Computer', 
            image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572825197207' , 
            description: <p>My trusty work horse.</p>,
        },
        {
            header: 'Alienware 34inch Monitor', 
            type: 'Monitor', 
            image: 'https://i.dell.com/sites/csimages/SNP_Imagery/all/3420dw.png' , 
            description: <p>I got this monitor to game on but works really well to code on as well. Ultrawides are amazing for having multiple VSCode windows.</p>,
        },
        {
            header: 'Dell 25inch Monitor', 
            type: 'Vertical Monitor', 
            image: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/output_devices/dell/monitors/u_series/u2518d/pdp/dell-monitor-u2518d-pdp-hero-504x350.jpg?fmt=png-alpha' , 
            description: <p>I use this as a vertical Monitor to show my terminal. </p>,
        },
        {
            header: 'Logitech MX Master 3', 
            type: 'Mouse', 
            image: 'https://c1.neweggimages.com/ProductImage/26-197-350-V06.jpg' , 
            description: <p>This mouse is amazing, the scroll wheel on it is perfect and I cannot reccomend it enough.</p>,
        },
        {
            header: 'Keychron Mechanical Keyboard', 
            type: 'Keyboard', 
            image: 'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-red-with-type-C-RGB-white-backlight_1800x1800.jpg?v=1601366521' , 
            description: <p>I love mech. keyboards and I always return to this one because the feel.</p>,
        },
    ]
}
const DailiesPhotoGraphy = {
    header: 'Photographhy Dailies',
    icon: 'camera retro',
    subHeading: 'My camera and Assc.',
    items:[
        {
            header: 'Sony a6500', 
            type: 'Camera', 
            image: 'https://images-na.ssl-images-amazon.com/images/I/91G4%2BZSZn1L._AC_SL1500_.jpg' , 
            description: <p>My first and only camera, I love it so far.</p>,
        },
        {
            header: 'Sony 10-18mm Wide-Angle Lense', 
            type: 'Lense', 
            image: 'https://images-na.ssl-images-amazon.com/images/I/41-RbZFuMEL._AC_.jpg' , 
            description: <p>This lense came with the camera, I use it for Landscape picture.</p>,
        },
        {
            header: 'Sony 18-105mm Lense', 
            type: 'Lense', 
            image: 'https://images-na.ssl-images-amazon.com/images/I/41-RbZFuMEL._AC_.jpg' , 
            description: <p>I haven't gotten to use it that much , but exicted to try it out more.</p>,
        },

    ]
}
const DailiesDrawing = {
    header: 'Drawing Stuff',
    icon: 'pencil alternate',
    subHeading: 'What I use to draw',
    items:[
        {
            header: 'iPad', 
            type: 'Tablet', 
            image: 'https://cdn.iphonelife.com/sites/iphonelife.com/files/styles/medium_width_breakpoints_theme_newmango_mobile_1x/public/ipadpro12.9inch.jpg?itok=VNEbqW4Q' , 
            description: <p>I have an older iPad pro form 2017 but it works well to draw on.</p>,
        },
        {
            header: 'iPad Pencil', 
            type: 'Pen', 
            image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0C2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1564075356758' , 
            description: <p>The pencil works really well with the ipad.</p>,
        },
        {
            header: 'Sketchbook', 
            type: 'Drawing App', 
            image: 'https://lh3.googleusercontent.com/7ZmhLBKfkPg7kJ7N7lH4GccTl80iLMNvVe1zxZz2lAG7yLLtckQXnpp3ShF1ayOE56Q=s180' , 
            description: <p>The app is free and I use it for all my drawing you see on the site.</p>,
        },
    ]
}
const DailiesHosting = {
    header: 'Hosting',
    icon: 'cloud',
    subHeading: 'How I host and deploy my code',
    items:[
        {
            header: 'Docker', 
            type: 'Containers', 
            image: 'https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Docker-Logo-White-RGB_Vertical-BG_0.png?itok=8Tuac9I3' , 
            description: <p>Pretty much the goto to containerize all the things.</p>,
        },
        {
            header: 'Netlify', 
            type: 'Hosting', 
            image: 'https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/ebruhshvba0wzbmnzhae' , 
            description: <p>Its so easy to link it up to the git repo and make it work that I always come back to it.</p>,
        },
        {
            header: 'Heroku', 
            type: 'Services Hosting', 
            image: 'https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/509/feature_thumb_heroku-logo.jpg' , 
            description: <p>My favorite way to get my services up and running, the UI is great and CLI has great documentation.</p>,
        },
        {
            header: 'AWS S3', 
            type: 'Image Storage', 
            image: 'https://www.cleo.com/sites/default/files/2018-10/logo_amazon-s3_module-11.png' , 
            description: <p>I will always run to my S3 for static files and the CLI is something I'm used to. </p>,
        },
    ]
}
export const DailiesProps = {
    dailies: [
        DailiesApplicaitons,
        DailiesTerminalSetup,
        DailiesHosting,
        DailiesWorkStation,
        DailiesPhotoGraphy,
        DailiesDrawing
    ],
    subHeading: 'A list of items and applications that I use daily, maybe you can try some of these out!',
}