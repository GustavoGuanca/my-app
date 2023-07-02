import LoginForm from "./components/LoginForms"
import logo from '../../pages/layout/assets/LogoLectura.png'
import background from './assets/background.jpeg'
import { AppConfig} from '../config/GlobalConfig'

const LoginPage = () => 
<div style={{ height: '100vh', backgroundImage:`url(${background})`}}>
    <div className="login-viewport" >
        <div className="login-viewport-cover" />
    </div>
    <div className="login-main">
        <div className="logoWrapper">
            <span><img src={logo} alt="logo" className="logoImg" style={{marginTop:'40px'}}/></span>
            <h1 style={{color:'white'}}>{ AppConfig.siteName}</h1>
        </div>
        <LoginForm/>
    </div>
</div>


export default LoginPage