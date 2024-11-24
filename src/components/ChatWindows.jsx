import { useState } from "react";
import { Chat } from "./Chat";

export const ChatWindows = (props) => {
    const {user, chatWindows, messages} = props;

    

    return(
        <ul id='chatWindows'>
            {chatWindows.map((contact) => (<Chat key={user.id} user={user} contact={contact} messages={messages}/>))}
        </ul>
    )
}