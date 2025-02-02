import { useState } from 'react'
import './News.css'

export const News = ({user}) => {
    const [news, setNews] = useState([
        {login: "Mufasa", text: "Pamiętacie o urodzinach Rafiki?"}
    ])
 
    const newsShare = (e) => {
        const text = e.target.parentNode.parentNode.firstChild.firstChild.value;
        e.target.parentNode.parentNode.firstChild.firstChild.value = "";
        let message = {login: user.name, text: text}
        setNews([message, ...news])
    }



    return(
        <section id="news">
            <form id="newsShare">
                <div>
                    <textarea id="newsText" placeholder="What do you think?" name="reg-pw"></textarea>
                </div>
                <div>
                    <input id='shareButton' type='button' value="Share" onClick={(e) => newsShare(e)}/>
                </div>         
            </form>
            <ul>
                {news.map((n, id) => (<li key={id}><article><h3>{n.login} shared:</h3><div>{n.text}</div></article></li>))}
            </ul>  
        </section>
    )
}