import React from 'react';
import IndexHed from '../components/indexHed/IndexHed';
import IndexLede from '../components/indexLede/IndexLede';
import MadeWith from '../components/madeWith/MadeWith';
import RecentPosts from '../components/recentPosts/RecentPosts';
import {indexHedeConstants, IndexLedeblurb, ActionItems} from '../staticContent/constants';
import Actions from '../components/actions/Actions';

 const Main = () => {
    return (
        <div>
            <IndexHed 
                hed = {indexHedeConstants.indexHed_hed}  
                lede = {indexHedeConstants.indexHed_lede}
                secondLede= {indexHedeConstants.indexHed_secondLede}
                listOfThings= {indexHedeConstants.indexHed_listOfThings}
                />
            <IndexLede blurb={IndexLedeblurb}/>
                <Actions actionItem1={ActionItems.actionItem1} actionItem2={ActionItems.actionItem2} actionItem3={ActionItems.actionItem3}/>
            <RecentPosts/>
            <MadeWith/>
        </div>
    )
}

export default Main;