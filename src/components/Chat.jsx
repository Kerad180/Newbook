import { useEffect, useState } from "react";

export const Chat = (props) => {
    const {user, contact, messages, addToMessages, removeFromChatWindows} = props;

    const keyListener = (e, contact) => {
        if (e.keyCode === 13 && e.shiftKey) {
            e.preventDefault()
            e.target.value = e.target.value + '\n'
            e.target.scrollTop=1e6;
        } else if (e.keyCode === 13) {

            addToMessages(e, contact)
        }
    }
    
    return(
        <div className='chatWindow'>
            <div>
                <h3>{contact.login}</h3>
                <div>
                    <img className='x'id={`x${contact.login}`} src='src/pictures/close-line.png' alt='x' onClick={() => removeFromChatWindows(contact)}/>
                </div>
            </div>
            <form className='chatForm'>
                <div className='messages' id={`messages${contact.login}`} >
                    {messages.map(
                        (message, id) => 
                            {
                                if(contact.id=== message.idUserFrom || contact.id === message.idUserTo) { 
                                    if(user.id === message.idUserFrom) {                             
                                        return(<li key={id} className="sendMessage">{message.message}</li>)
                                    } else if(user.id === message.idUserTo) {
                                        return(<li key={id} className="recMessage">{message.message}</li>)
                                    }
                                }
                            }
                    )}
                </div>

                <div className='textChat' id={`textChat${contact.login}`}>
                    <div><textarea onKeyDown={(e) => keyListener(e, contact)}></textarea></div>
                    <div><input className='sendButton' type='button' value='Send' onClick={(e) => addToMessages(e, contact)}/></div>
                </div>
            </form>
        </div>
    );

}

