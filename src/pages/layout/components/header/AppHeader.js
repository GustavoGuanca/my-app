import { Layout} from 'antd';
import face from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import './AppHeader.scss'
// import { Button, Space } from 'antd';
const { Header} = Layout;

const imagenes = {
  height:'42px',
  paddingTop:'3px',
  margin: '4px',
  paddingBottom: '2%'
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
        justifyContent: 'flex-end',
        height:'50px'
      }}
    >
      <div className="demo-logo" />
      <div>
        <img src={face} style={imagenes} className='img1'/>
        <img src={insta} style={imagenes} className='img2'/>
        <img src={twitter} style={imagenes} className='img3'/>
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