import './LoginInterface.css'

export const LoginInterface = () => {
    return(
        <div id="logContainer">
            <div id="card">
                <h1>Newbook</h1>
                <form id='logForm'>
                    <div className="windows">
                        <div className="loginAndPassword">LOGIN</div> 
                        <input data-window type="text" name="login"/><br/>
                    </div>
                    <div className="windows">
                        <div className="loginAndPassword">PASSWORD</div> 
                        <input data-window type="password" name="password"/>
                    </div>
                    <div className="windows">
                        <input id="logButton" type="submit" value="Log in"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
