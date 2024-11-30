import { users } from './users';
import { Chat } from './Chat';
import { useState, useEffect } from 'react';
import { Contact } from './Contact';
import './Contacts.css'




export const Contacts = (props) => {
    const {user, addToChatWindows, removeFromChatWindows, isMobile} = props;

    const setContacts = () => {
        let tempContacts = []
            users.forEach((contact) => {
                if(contact.login !== user.name) {
                    tempContacts.push(contact.login)
                }
            })
    
            return tempContacts;
    }
    
    const contacts = setContacts();
    
    return(
        <aside id='contacts'>
            <h2 style={{fontSize: isMobile ? '25px' : '50px'}}>Contacts</h2>
            <div id='line' style={{width: isMobile ? '100px' : '240px'}}></div>
            <ul>
                {contacts.map((contact) => (<Contact key={user.id} contact={contact} addToChatWindows={addToChatWindows} removeFromChatWindows={removeFromChatWindows} isMobile={isMobile}/>))}
            </ul>
        </aside>
    )
}