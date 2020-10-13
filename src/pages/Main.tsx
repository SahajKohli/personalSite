import React from 'react';
import IndexHed from '../components/indexHed/IndexHed';
import IndexLede from '../components/indexLede/IndexLede';
import RecentPosts from '../components/recentPosts/RecentPosts';
import {indexHedeConstants, IndexLedeblurb, ActionItems, multicards } from '../staticContent/constants';
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
            <RecentPosts card1={multicards.card1} card2={multicards.card2} card3={multicards.card3}/>
        </div>
    )
}

export default Main;