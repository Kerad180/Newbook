import { useState } from 'react'
import { users } from './users';
import './LoginInterface.css'

export const LoginInterface = (props) => {
    const { onLogin } = props;
    const [formData, setFormDate] = useState({login: "", password: ""});
 
    const onChangeLogin = (e) => {
        setFormDate({...formData, login: e.target.value})
    }
    
    const onChangePassword = (e) => {
        setFormDate({...formData, password: e.target.value})
    }

    const onClick = () => {
        users.forEach((user) => {
            if(formData.login === user.login && formData.password === user.password) {
                onLogin({name: formData.login});
            }
        })
    }
    

    return(
        <div id="logContainer">
            <div id="card">
                <h1>Newbook</h1>
                <form id='logForm'>
                    <div className="windows">
                        <div className="loginAndPassword">Login</div> 
                        <input data-window type="text" name="login" value={formData.login} onChange={onChangeLogin}/>
                    </div>
                    <div className="windows">
                        <div className="loginAndPassword">Password</div> 
                        <input data-window type="password" name="password" value={formData.password} onChange={onChangePassword}/>
                    </div>
                    <div className="windows">
                        <input id="logButton" type="button" value="Log in" onClick={onClick}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
