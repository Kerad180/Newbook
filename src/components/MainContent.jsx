import { useState } from 'react'
import { Contacts } from './Contacts'
import { News } from './News' 
import './MainContent.css'

const Top = ({onLogout}) => {

    return(
        <header id='top'>
           <div><h2>Mainbook</h2></div>
           <div><input id="returnButton" type="button" value="Log Out" onClick={onLogout}/></div>       
        </header>
    )
}

const Main = ({user}) => {
    return(
        <section id='main'>
            <Contacts user={user}/>
            <News/>
        </section>
    )
}

export const MainContent = (props) => {
    const { onLogout, user } = props; 

    return(
        <section id='container'>
            <Top onLogout={onLogout}/>
            <Main user={user}/>
        </section>
    )
}

