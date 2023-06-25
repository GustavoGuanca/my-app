import React from 'react';
import { Col, Layout} from 'antd';
import { Carousel } from 'antd';
import './AppContent.scss'
const {Content} = Layout;


const contentStyle = {
  height: '160px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79', 
};

const carrusel = {
  col: '2',
  with: '40%'
}
const AppContent = () => {
  return (
    <Content style={{ margin: '0', overflow: 'initial', background: 'white'}}>
      <div style={{ padding: 2, textAlign: 'center', background: 'white' }}>
        <h1>Bienvenido al hermoso mundo de la lectura</h1>
        <div>
          <Carousel autoplay style={carrusel}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
          </Carousel>
          <Carousel autoplay style={carrusel}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </Content>
  );
};

export default AppContent;