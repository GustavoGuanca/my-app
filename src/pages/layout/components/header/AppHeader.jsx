import { Layout, Button } from 'antd'
import face from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import { useNavigate } from 'react-router-dom'
import { AppConfig } from '../../../../shared/config/GlobalConfig'
import AppAuthenticationHelper from '../../../../shared/helpers/AppAuthenticationHelper'
import './AppHeader.scss'

const { Header} = Layout

const imagenes = {
  height:'42px',
  paddingTop:'3px',
  margin: '4px',
  paddingBottom: '2%'
}

const AppHeader = () => {
  let navigate = useNavigate()
  const logOut = () => {
    AppAuthenticationHelper.removeJwtToken()
    navigate('/login')
  }

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex', 
        justifyContent: 'flex-end',
        height:'50px'
      }}
    >
        <h2>{AppConfig.siteName}</h2>
        <a href='https://www.facebook.com/paularmercado/'>
          <img src={face} style={imagenes} />
        </a>
        <a href=''>
          <img src={insta} style={imagenes} />
        </a>
        <a href=''>
          <img src={twitter} style={imagenes} />   
        </a>
        <Button
          type='primary'
          className='salir'
          onClick={logOut}
        >Salir</Button>
    </Header>
  )
}

export default AppHeader