import './ContactsButton.css'

import { useState } from "react"

export const ContactsButton = ({isMobile}) => {
    const [isNewsVisible, setIsNewsVisible] = useState(true)

    const switchMainContent = () => {
        if(isMobile) {
            if (isNewsVisible) {
                document.getElementById('news').style.display = 'none'
                document.getElementById('contacts').style.display = 'block'
                setIsNewsVisible(false)
            } else if (!isNewsVisible) {
                document.getElementById('news').style.display = 'block'
                document.getElementById('contacts').style.display = 'none'
                setIsNewsVisible(true)
            }
        } else {
            document.getElementById('news').style.display = 'block'
            document.getElementById('contacts').style.display = 'block' 
        }
    }


    return(
        <button id='contactsButton' style={{display: isMobile ? 'block' : 'none'}} onClick={() => switchMainContent()}>C</button>
    )
}