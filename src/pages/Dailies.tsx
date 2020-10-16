import React from 'react';
import ListItem from '../components/ListItems/ListItem';
import {Header} from 'semantic-ui-react';
import {DailiesProps} from '../staticContent/dailiesConstants'

 const Dailies = () => {
    return (
        <div>  
            <div style={{textAlign:'center'}}>
                <Header color ='grey' as='h3'>{DailiesProps.subHeading}</Header>
                <br/>
            </div>
            {DailiesProps.dailies.map( (item) =>
                {
                    return (<ListItem header={item.header} icon={item.icon} subHeading={item.subHeading} items={item.items}/>);
                }
            )}
        </div>
    )
}

export default Dailies;