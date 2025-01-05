import { useEffect, useState } from "react";

export const Chat = (props) => {
    const {user, contact, messages, addToMessages, removeFromChatWindows} = props;

    
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
                        (message) => 
                            {
                                if(contact.id=== message.idUserFrom || contact.id === message.idUserTo) { 
                                    if(user.id === message.idUserFrom) {                             
                                        return(<li key={user.id} className="messageFrom" >{message.message}</li>)
                                    } else if(user.id === message.idUserTo) {
                                        return(<li key={user.id} className="messageTo">{message.message}</li>)
                                    }
                                }
                            }
                    )}
                </div>
                <div className='textChat'>
                    <div><textarea></textarea></div>
                    <div><input className='sendButton' type='button' value='Send' onClick={(e) => addToMessages(e, contact.id, contact)}/></div>
                </div>
            </form>
        </div>
    );

}

