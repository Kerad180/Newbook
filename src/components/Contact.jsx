import { useEffect, useState } from 'react';
import { Chat } from './Chat';


export const Contact = (props) => {
    const {contact, addToChatWindows, removeFromChatWindows} = props;

    const [isChatCreated, setIsChatCreated] = useState(false)


    const addChat = (e) => {

    
        if (!isChatCreated) {
            addToChatWindows(contact);
            setIsChatCreated(true)
            setTimeout(() => {
                document.getElementById(`messages${contact}`).scrollTop=1e6;
            },1)    
        } else {
            setIsChatCreated(false);
            removeFromChatWindows(contact);
        }
    }


    return(
        <li  contact={contact} onClick={(e) => addChat(e)}>{contact}</li>
    )
}

