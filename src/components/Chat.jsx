import { useEffect, useState } from "react";
import { users } from "./users";
import './Chat.css'

export const Chat = (props) => {
    const {user, contact, messages} = props;


    const setUserTo = () => {
        let id;
        users.forEach((tempUser) => { 
            if(tempUser.login === contact) {
                id = tempUser.id;
            }
        

        }
        )
        return id;
    }

    const contactId = setUserTo();

    const scrollToBottom = (e) => {
        console.log(e)
    }


    return(
        <div className='chatWindow'>
            <div>
                <h3>{contact}</h3>
                <div>
                    <img className='x' src='pictures/close-line.png' alt='x'/>
                </div>
            </div>
            <form className='chatForm'>
                <div className='messages' id={`messages${contact}`}>
                    {messages.map(
                        (message) => 
                            {
                                if(contactId === message.idUserFrom || contactId === message.idUserTo) { 
                                    if(user.id === message.idUserFrom) {
                                        return(<li className="messageFrom" >{message.message}</li>)
                                    } else if(user.id === message.idUserTo) {
                                        return(<li className="messageTo">{message.message}</li>)
                                    }
                                }
                            }
                    )}
                </div>
                <div className='textChat'>
                    <div><textarea></textarea></div>
                        <div><input className='sendButton' type='submit' value='Send'/></div>
                </div>
            </form>
        </div>
    );

}

