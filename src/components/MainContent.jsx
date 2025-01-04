import { useState } from 'react'
import { Top } from './Top'
import { Center } from './Center'
import { ChatWindows } from './ChatWindows';
import { Signature } from './Signature';
import './MainContent.css'

export const MainContent = (props) => {
    const { onLogout, user } = props; 

    const [chatWindows, setChatWindows] = useState([])

    const [messages, setMessages] = useState([
        {idUserFrom: 1, idUserTo: 2, message: 'Cześć synu, co u ciebie słychać?'},
        {idUserFrom: 2, idUserTo: 1, message: 'Wszystko dobrze'},
    ])

    const addToMessages = (e, contactId, contact) => {
        const text = e.target.parentNode.parentNode.childNodes[0].childNodes[0].value
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].value = "";
        let message = {idUserFrom: user.id, idUserTo: contactId, message: text}
        setMessages([...messages, message])
        setTimeout(() => {
            document.getElementById(`messages${contact}`).scrollTop=1e6;
        },1) 
    }

    const addToChatWindows = (contact) => {
        setChatWindows([...chatWindows, contact])
    }

    const removeFromChatWindows = (contact) => {
        let idToRemove;
        
        chatWindows.forEach((window) => {
  
            if(contact === window) {
                idToRemove = chatWindows.indexOf(window);
            }
        })

        setChatWindows([...chatWindows.slice(0, idToRemove), ... chatWindows.slice(idToRemove + 1)])
    }

    return(
        <section id='container'>
            <Top onLogout={onLogout}/>
            <Center user={user} addToChatWindows={addToChatWindows} removeFromChatWindows={removeFromChatWindows}/>
            <Signature/>
            <ChatWindows user={user} chatWindows={chatWindows} messages={messages} removeFromChatWindows={removeFromChatWindows} addToMessages={addToMessages}/>
        </section>
    )
}

