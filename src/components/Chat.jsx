import { users } from "./users";

export const Chat = (props) => {
    const {user, contact, messages, addToMessages, removeFromChatWindows} = props;


    
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


    return(
        <div className='chatWindow'>
            <div>
                <h3>{contact}</h3>
                <div>
                    <img className='x'id={`x${contact}`} src='src/pictures/close-line.png' alt='x' onClick={() => removeFromChatWindows(contact)}/>
                </div>
            </div>
            <form className='chatForm'>
                <div className='messages' id={`messages${contact}`}>
                    {messages.map(
                        (message) => 
                            {
                                if(contactId === message.idUserFrom || contactId === message.idUserTo) { 
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
                    <div><input className='sendButton' type='button' value='Send' onClick={(e) => addToMessages(e, contactId, contact)}/></div>
                </div>
            </form>
        </div>
    );

}

