import { useEffect, useState } from 'react';


export const Contact = (props) => {
    const {contact, addToChatWindows, removeFromChatWindows} = props;

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
            removeChat()
        } else {
            addChat()
        }
    }

    return(
        <li contact={contact.login} onClick={() => setChat()}>{contact.login}</li>
    )
}

