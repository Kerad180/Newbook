import { useEffect, useState } from 'react';


export const Contact = (props) => {
    const {contact, addToChatWindows, removeFromChatWindows, isMobile} = props;

    const [isChatCreated, setIsChatCreated] = useState(false)


    const addChat = () => {
        addToChatWindows(contact);
        setIsChatCreated(true)
        setTimeout(() => {
            document.getElementById(`messages${contact.login}`).scrollTop=1e6;
        },1) 
    }

    const removeChat = () => {
        setIsChatCreated(false); 
        removeFromChatWindows(contact);
    }

    const setChat = () => {
        if (isChatCreated && document.getElementById(`x${contact.login}`)) {
            console.log(1)
            removeChat()
        } else {
            console.log(2)
            addChat()
        }
    }

    return(
        <li contact={contact.login} onClick={() => setChat()} style={{width: isMobile ? '110px' : '220px'}}>{contact.login}</li>
    )
}

