import React from 'react'
import  LoginForm from "./components/LoginForms"
import logo from './assets/logo.png'
import background from './assets/background.jpeg'

import { AppConfig} from '../config/GlobalConfig'
import './LoginPage.scss'

const LoginPage = () => {
return <div style={{ height: '100vh' }}>
<div className="login-viewport" style={{ backgroundImage: `url(${background})` }}>
<div className="login-viewport-cover" />
</div>
<div className="login-main">
<div className="logoWrapper">
<span><img src={logo} alt="logo" className="logoImg" /></span>
<p>{ AppConfig.siteName}</p>
</div>
<LoginForm/>
</div>
</div>

}
export default LoginPage