import { ContactsButton } from './ContactsButton'
import './Top.css'

export const Top = ({onLogout, isMobile}) => {

    return(
        <header id='top' style={{gridTemplateColumns: isMobile ? '13fr 1fr 1fr' : '13fr 1fr'}}>
            <div><h2>Newbook</h2></div>
            <ContactsButton isMobile={isMobile}/>
            <button id="returnButton" onClick={onLogout}>Log Out</button>
        </header>
    )
}