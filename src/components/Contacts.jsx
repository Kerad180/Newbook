import { users } from './users';
import './Contacts.css'
import { useState } from 'react';



export const Contacts = ({user}) => {
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
                {contacts.map((contact) => (<li key={contact}>{contact}</li>))}
            </ul>
        </aside>
    )
}