import React, { useState } from 'react';
import {Transition, Button} from 'semantic-ui-react'
import '../../styles/ActionItem.css';
import {Link} from '@reach/router';


interface ActionItemProps {
    itemName: string;
    duration: number;
    animation: string;
    url:string;
    icon:string
}

export const ActionItem = (props: ActionItemProps) => {
    const [toggled, setToggle] = useState(true);

    const onHover = () =>{
        setToggle(!toggled);
    }
    
    var className = 'actionItem'+ toggled;
    return (
        <div>
        <Transition
            animation={props.animation}
            duration={props.duration}
            visible={toggled}
          >
        <Button
        onMouseEnter={() => setToggle(false)}
        onMouseLeave={() => setToggle(true)}
         inverted circular icon={props.icon} />
          </Transition>

        <Transition
            animation={props.animation}
            duration={props.duration}
            visible={toggled}
          >
              <div 
              onMouseEnter={() => setToggle(false)}
              onMouseLeave={() => setToggle(true)}
              >
                  
                <Link className={className}  to={props.url}>{props.itemName}</Link>
              </div>
          </Transition>
        </div>
    )
}