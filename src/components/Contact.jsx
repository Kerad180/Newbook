import { useState } from 'react';
import { Chat } from './Chat';


export const Contact = ({contact, addToChatWindows}) => {
    const [isChatCreated, setIsChatCreated] = useState(false)

    const addChat = (e) => {

    
        if (!isChatCreated) {
            setIsChatCreated(true)
            addToChatWindows(contact);
            
    

    
        }
    }


    return(
        <li  contact={contact} onClick={(e) => addChat(e)}>{contact}</li>
    )
}

