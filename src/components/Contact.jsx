import { useEffect, useState } from 'react';


export const Contact = (props) => {
    const {contact, addToChatWindows, removeFromChatWindows, isMobile} = props;

    const [isChatCreated, setIsChatCreated] = useState(false)


    const addChat = () => {
        addToChatWindows(contact);
        setIsChatCreated(true)
        setTimeout(() => {
            document.getElementById(`messages${contact}`).scrollTop=1e6;
        },1) 
    }

    const removeChat = () => {
        setIsChatCreated(false);
        removeFromChatWindows(contact);
    }


    useEffect(() => {
        if(isChatCreated){
            document.getElementById(`x${contact}`).addEventListener('click', () => removeChat())
        }  
    })


    return(
        <li contact={contact} onClick={() => isChatCreated ? removeChat() : addChat()} style={{width: isMobile ? '110px' : '220px'}}>{contact}</li>
    )
}

