import { users } from './users';
import { Chat } from './Chat';
import { useEffect, useState } from 'react';
import { Contact } from './Contact';
import './Contacts.css'




export const Contacts = ({user, addToChatWindows}) => {
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
            <h2>Contacts</h2>
            <div id='line'></div>
            <ul>
                {contacts.map((contact) => (<Contact key={user.id} contact={contact} addToChatWindows={addToChatWindows}/>))}
            </ul>
        </aside>
    )
}