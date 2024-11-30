import './Top.css'

export const Top = ({onLogout}) => {

    return(
        <header id='top'>
           <div><h2>Newbook</h2></div>
           <div><input id="returnButton" type="button" value="Log Out" onClick={onLogout}/></div>       
        </header>
    )
}