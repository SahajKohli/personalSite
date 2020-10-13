import React from 'react';
import ListItem from '../components/ListItems/ListItem';
import {Header} from 'semantic-ui-react';
import {DailiesProps} from '../staticContent/dailiesConstants'

 const Dailies = () => {
     console.log("Dailies loaded");
    return (
        <div>  
            <div style={{textAlign:'center'}}>
                <Header color ='grey' as='h3'>{DailiesProps.subHeading}</Header>
                <br/>
            </div>
            {DailiesProps.dailies.map( (item) =>
                {
                    console.log(item);
                    return (<ListItem header={item.header} icon={item.icon} subHeading={item.subHeading} items={item.items}/>);
                }
            )}
        </div>
    )
}

export default Dailies;