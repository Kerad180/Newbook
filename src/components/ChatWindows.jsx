import { Chat } from "./Chat";
import './ChatWindows.css'

export const ChatWindows = (props) => {
    const {user, chatWindows, messages, removeFromChatWindows, addToMessages, isMobile} = props;

    return(
        <ul id='chatWindows'>
            {chatWindows.map((contact, id) => (<Chat key={id} user={user} contact={contact} messages={messages} removeFromChatWindows={removeFromChatWindows} addToMessages={addToMessages} isMobile={isMobile}/>))}
        </ul>
    )
}
