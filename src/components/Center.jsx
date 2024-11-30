import { Contacts } from './Contacts'
import { News } from './News' 
import { Cube } from './Cube';
import { useState, useEffect } from 'react';

import './Center.css'

export const Center = (props) => {
    const {user, addToChatWindows, removeFromChatWindows} = props;
    
    const [isVisibleCube, setIsVisibleCube] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    

    useEffect(() => {
        if(window.innerWidth <= 1150) {
            setIsVisibleCube(false)
        } else {
            setIsVisibleCube(true)
        }
        
        if(window.innerWidth <= 800) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }

        document.body.onresize = () => {

            if(window.innerWidth <= 1150) {
                setIsVisibleCube(false)
            } else {
                setIsVisibleCube(true)
            }
            
            if(window.innerWidth <= 800) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
    })
    
    
    return(
        <section id='center'>
            <Contacts user={user} addToChatWindows={addToChatWindows} removeFromChatWindows={removeFromChatWindows} isMobile={isMobile}/>
            <News user={user}/>
            <Cube isVisibleCube={isVisibleCube}/>
        </section>
    )
}