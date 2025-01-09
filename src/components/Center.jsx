import { Contacts } from './Contacts'
import { News } from './News' 
import { Cube } from './Cube';
import { useState, useEffect } from 'react';

import './Center.css'

export const Center = (props) => {
    const {user, addToChatWindows, removeFromChatWindows, isVisibleCube} = props;
    
    
    return(
        <section id='center'>
            <Contacts user={user} addToChatWindows={addToChatWindows} removeFromChatWindows={removeFromChatWindows}/>
            <News user={user}/>
            <Cube isVisibleCube={isVisibleCube}/>
        </section>
    )
}