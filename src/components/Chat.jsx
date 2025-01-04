import { useEffect, useState } from "react";
import { users } from "./users";

export const Chat = (props) => {
    const {user, contact, messages, addToMessages, removeFromChatWindows} = props;

    const [contactId, setContactId] = useState()

    useEffect(() => {
        const getUserTo = () => {
            let id;
            users.forEach((tempUser) => { 
                if(tempUser.login === contact) {
                    id = tempUser.id;
                }
            }
            )
            return id;
        }
        setContactId(getUserTo())
    }, [])


    


    return(
        <div className='chatWindow'>
            <div>
                <h3>{contact}</h3>
                <div>
                    <img className='x'id={`x${contact}`} src='src/pictures/close-line.png' alt='x' onClick={() => removeFromChatWindows(contact)}/>
                </div>
            </div>
            <form className='chatForm'>
                <div className='messages' id={`messages${contact}`} >
                    {messages.map(
                        (message) => 
                            {
                                console.log(contactId) 
                                if(contactId === message.idUserFrom || contactId === message.idUserTo) { 
                                    if(user.id === message.idUserFrom) {  
                                        console.log(contactId)  
                                        console.log(contact)                               
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
                    <div><input className='sendButton' type='button' value='Send' onClick={(e) => addToMessages(e, contactId, contact)}/></div>
                </div>
            </form>
        </div>
    );

}

