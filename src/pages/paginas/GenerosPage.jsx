import React from "react";
import { Layout } from "antd";
import AppLeftMenu from "../layout/components/leftMenu/AppLeftMenu";
import AppHeader from "../layout/components/header/AppHeader";
import AppFooter from "../layout/components/footer/AppFooter";
import GenerosForm from '../../shared/entities/components/form/GenerosForm'

const AppLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <AppLeftMenu />
    <Layout className="app-layout">
      <AppHeader/>
      <GenerosForm/>
      <AppFooter/>
    </Layout>
  </Layout>
);
export default AppLayout;