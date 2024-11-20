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
            <News user={user}/>
            <Cube/>
        </section>
    )
}

const Signature = () => {
    return(
    <footer id='signature'>
        <span>Created by Dariusz Lipiński</span>
    </footer>
    )
}

const Cube = () => {
    return(
    <aside id="something">   
        <div className="cubeLine"></div>
        <div id="placeForCube">
            <div id="stageForCube">
                <div id="cube">
                    <div className="wall front">MB</div>
                    <div className="wall back"></div>
                    <div className="wall left"></div>
                    <div className="wall right"></div>
                    <div className="wall top"></div>
                    <div className="wall bottom"></div>
                </div>
            </div>
        </div>  
        <div className="cubeLine"></div>
    </aside>
    )
}

export const MainContent = (props) => {
    const { onLogout, user } = props; 

    return(
        <section id='container'>
            <Top onLogout={onLogout}/>
            <Main user={user}/>
            <Signature/>
        </section>
    )
}

