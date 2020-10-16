import React, { useState } from 'react';
import {Link} from '@reach/router';
import '../../styles/headerButton.css'

interface HeaderButtonProps{
    link: string,
    text: string,
}

const HeaderButton = (props: HeaderButtonProps) =>{

    const [hovering, setIsHovering] = useState(false);

    let buttonClassName = 'headerButton' + hovering;
    return (
        <Link to={props.link} className = {buttonClassName} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            {props.text}
        </Link>
    )
}

export default HeaderButton