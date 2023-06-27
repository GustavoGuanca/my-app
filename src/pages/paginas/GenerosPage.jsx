import React from "react";
import { Layout } from "antd";
import AppLeftMenu from "../layout/components/leftMenu/AppLeftMenu";
import AppHeader from "../layout/components/header/AppHeader";
import AppFooter from "../layout/components/footer/AppFooter";
import GenerosForm from '../../shared/entities/components/form/GenerosForm';
import fondo from '../layout/assets/fondoClientes.jpg';
import { Content } from "antd/es/layout/layout";

const AppLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <AppLeftMenu />
    <Layout className="app-layout" style={{backgroundImage: `url(${fondo})`}}>
      <AppHeader/>
      <Content>
      <h1 style={{color:'white', fontSize:'45px', textAlign:'left', marginLeft:'20px',
          textShadow: '#0f2549d1 7px 5px 0px'
        }}>GENEROS</h1>
        <GenerosForm/>
      </Content>
      <AppFooter/>
    </Layout>
  </Layout>
);
export default AppLayout;