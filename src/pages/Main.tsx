import React from 'react';
import IndexHed from '../components/indexHed/IndexHed';
import IndexLede from '../components/indexLede/IndexLede';
import MadeWith from '../components/madeWith/MadeWith';
import RecentPosts from '../components/recentPosts/RecentPosts';
import {indexHedeConstants} from '../staticContent/constants';

 const Main = () => {
    return (
        <div>
            <IndexHed hed = {indexHedeConstants.indexHed_hed}  lede = {indexHedeConstants.indexHed_lede}/>
            <IndexLede/>
            <RecentPosts/>
            <MadeWith/>
        </div>
    )
}

export default Main;