import { useState } from 'react'
import './News.css'

export const News = ({user}) => {
    const [news, setNews] = useState([
        {login: "Mufasa", text: "Pamiętacie o urodzinach Rafiki?"}
    ])
 
    const newsShare = (e) => {
        const text = e.target.parentNode.parentNode.firstChild.firstChild.value;
        e.target.parentNode.parentNode.firstChild.firstChild.value = "";
        const message = {login: user.name, text: text}
    }



    return(
        <section id="news">
            <form id="newsShare">
                <div>
                    <textarea id="newsText" placeholder="What do you think?" name="reg-pw"></textarea>
                </div>
                <div>
                    <input id='shareButton' type='button' value="Share" onClick={newsShare}/>
                </div>         
            </form>
            <ul>
                {news.map((n) => (<li key={news.indexOf(n)}><article><h3>{n.login} shared:</h3><div>{n.text}</div></article></li>))}
            </ul>  
        </section>
    )
}