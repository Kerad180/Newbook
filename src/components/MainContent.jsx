import { useState } from 'react'
import { Contacts } from './Contacts'
import { News } from './News' 
import { users } from './users'
import { Chat } from './Chat';
import { ChatWindows } from './ChatWindows';
import './MainContent.css'

const Top = ({onLogout}) => {

    return(
        <header id='top'>
           <div><h2>Mainbook</h2></div>
           <div><input id="returnButton" type="button" value="Log Out" onClick={onLogout}/></div>       
        </header>
    )
}

const Center = (props) => {
    const {user, addToChatWindows, removeFromChatWindows} = props;
    return(
        <section id='center'>
            <Contacts user={user} addToChatWindows={addToChatWindows} removeFromChatWindows={removeFromChatWindows}/>
            <News user={user}/>
            <Cube/>
        </section>
    )
}

const Signature = () => {
    return(
    <footer id='signature'>
        <span>Created by Dariusz Lipiński</span>
    </footer>
    )
}

const Cube = () => {
    return(
    <aside id="something">   
        <div className="cubeLine"></div>
        <div id="placeForCube">
            <div id="stageForCube">
                <div id="cube">
                    <div className="wall front">MB</div>
                    <div className="wall back"></div>
                    <div className="wall left"></div>
                    <div className="wall right"></div>
                    <div className="wall top"></div>
                    <div className="wall bottom"></div>
                </div>
            </div>
        </div>  
        <div className="cubeLine"></div>
    </aside>
    )
}

export const MainContent = (props) => {
    const { onLogout, user } = props; 

    const [chatWindows, setChatWindows] = useState([])

    const [messages, setMessages] = useState([
        {idUserFrom: 1, idUserTo: 2, message: 'Cześć synu, co u ciebie słychać?'},
        {idUserFrom: 2, idUserTo: 1, message: 'Wszystko dobrze'},
        {idUserFrom: 1, idUserTo: 2, message: 'Cześć synu, co u ciebie słychać?'},
        {idUserFrom: 2, idUserTo: 1, message: 'Wszystko dobrze'},
        {idUserFrom: 1, idUserTo: 2, message: 'Cześć synu, co u ciebie słychać?'},
        {idUserFrom: 2, idUserTo: 1, message: 'Wszystko dobrze'},
        {idUserFrom: 1, idUserTo: 2, message: 'Cześć synu, co u ciebie słychać?'},
        {idUserFrom: 2, idUserTo: 1, message: 'Wszystko dobrze'},
        {idUserFrom: 1, idUserTo: 2, message: 'Cześć synu, co u ciebie słychać?'},
        {idUserFrom: 2, idUserTo: 1, message: 'Wszystko dobrze'},
        {idUserFrom: 1, idUserTo: 2, message: 'Cześć synu, co u ciebie słychać?'},
        {idUserFrom: 2, idUserTo: 1, message: 'Wszystko dobrze'},
        {idUserFrom: 1, idUserTo: 2, message: 'Cześć synu, co u ciebie słychać?'},
        {idUserFrom: 2, idUserTo: 1, message: 'Wszystko dobrze'},
    ])

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
            <ChatWindows user={user} chatWindows={chatWindows} messages={messages} removeFromChatWindows={removeFromChatWindows}/>
        </section>
    )
}

