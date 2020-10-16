import React, { useState } from 'react';
import {Transition, Button, SemanticICONS} from 'semantic-ui-react'
import '../../styles/ActionItem.css';
import {Link} from '@reach/router';


interface ActionItemProps {
    itemName: string;
    duration: number;
    animation: string;
    url:string;
    icon:SemanticICONS;
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
          <Link className={className}  to={props.url}>
              <Button
                onMouseEnter={() => setToggle(false)}
                onMouseLeave={() => setToggle(true)}
                href={props.url}
                inverted circular 
                icon={props.icon} 
              />
          </Link>
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