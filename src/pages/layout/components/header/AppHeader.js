import { Layout} from 'antd';
import face from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import './AppHeader.scss'
// import { Button, Space } from 'antd';
const { Header} = Layout;

const imagenes = {
  height:'50px',
  paddingTop:'20px',
  margin: '4px',
  paddingBottom: '0%'
}

const AppHeader = () => {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height:'59px'
      }}
    >
      <div className="demo-logo" />
      <div>
        <img src={face} style={imagenes}/>
        <img src={insta} style={imagenes}/>
        <img src={twitter} style={imagenes}/>
      </div>
        {/* <Space wrap>
        <Button type="primary" style={{
          display:'flex',
          alignItems:'right',
          background:'#4e5861'
        }}>Ingresar</Button>
      </Space>  */}
    </Header>
  );
};
export default AppHeader;