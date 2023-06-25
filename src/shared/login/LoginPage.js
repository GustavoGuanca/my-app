import React from 'react'
import LoginForm from "./components/LoginForms"
import logo from './assets/logo.png'
import background from './assets/background.jpeg'

import { AppConfig} from '../config/GlobalConfig'
import './LoginPage.scss'

const LoginPage = () => {
return <div style={{ height: '100vh', backgroundImage:{background} }}>
<div className="login-viewport" >
<div className="login-viewport-cover" />
</div>
<div className="login-main" style={{ backgroundImage:`url(${background})`}}>
<div className="logoWrapper">
<span><img src={logo} alt="logo" className="logoImg" /></span>
<p>{ AppConfig.siteName}</p>
<p>¡Bienvenido!</p>
</div>
<LoginForm/>
</div>
</div>

}
export default LoginPage