import { Row, Col, Layout, Input} from 'antd'
import { Carousel } from 'antd'
//#region importación de imagenes
import imgCarrusel1 from '../../assets/urano_meet_Las_3_despedidas_de_Georg_Kahn.png'
import imgCarrusel2 from '../../assets/carrusel2.jpg'
import imgCarrusel3 from '../../assets/carrusel3.png'
import libro1 from '../../assets/libros/libro1.png'
import libro2 from '../../assets/libros/libro2.png'
import libro3 from '../../assets/libros/libro3.png'
import libro4 from '../../assets/libros/libro4.png'
import libro5 from '../../assets/libros/libro5.png'
import libro6 from '../../assets/libros/libro6.png'
import libro7 from '../../assets/libros/libro7.png'
import libro8 from '../../assets/libros/libro8.png'
import libro9 from '../../assets/libros/libro9.png'
//#endregion
import './AppContent.scss'
const {Content} = Layout
const { Search } = Input

const AppContent = () => {
  return (
    <Content style={{ margin: '0', overflow: 'initial', background: 'white', height: 'auto'}}>
      <div style={{ padding: 2, textAlign: 'center', background: 'white' }}>
        <Row justify={'center'}>
          <Col span={10} >
            <Search placeholder="¿Qué libro estás buscando?"/>
          </Col>
        </Row>
        <p/>
        <Carousel autoplay>
          <div>
            <img src={imgCarrusel1} style={{width: '100%'}}/>
          </div>
          <div>
            <img src={imgCarrusel2} style={{width: '100%'}}/>
          </div>
          <div>
            <img src={imgCarrusel3} style={{width: '100%'}}/>
          </div>
        </Carousel>
        <Row>
          <Col span={8}>
            <div>
              <img src={libro1} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img src={libro2} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img src={libro3} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img src={libro4} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img src={libro5} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img src={libro6} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img src={libro7} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img src={libro8} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
          <Col span={8}>
            <div>
              <img src={libro9} style={{marginTop:'20px'}}/>
              <h1/>TITULO
              <p/>autor 
              <p/>precio
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  )
}

export default AppContent