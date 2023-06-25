import React from 'react';
import { Col, Layout} from 'antd';
import { Carousel } from 'antd';
import imgCarrusel1 from '../../assets/urano_meet_Las_3_despedidas_de_Georg_Kahn.png';
import imgCarrusel2 from '../../assets/carrusel2.jpg';
import imgCarrusel3 from '../../assets/carrusel3.png';
import './AppContent.scss'
const {Content} = Layout;


const AppContent = () => {
  return (
    <Content style={{ margin: '0', overflow: 'initial', background: 'white'}}>
      <div style={{ padding: 2, textAlign: 'center', background: 'white' }}>
        <h1>Bienvenido al hermoso mundo de la lectura</h1>
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
        <div>
          
        </div>
      </div>
    </Content>
  );
};

export default AppContent;