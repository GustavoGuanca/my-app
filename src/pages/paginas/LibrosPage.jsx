import React from "react";
import { Layout } from "antd";
import AppLeftMenu from "../layout/components/leftMenu/AppLeftMenu";
import AppHeader from "../layout/components/header/AppHeader";
import AppFooter from "../layout/components/footer/AppFooter";
import LibrosForm from '../../shared/entities/components/form/LibrosForm'

const AppLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <AppLeftMenu />
    <Layout className="app-layout">
      <AppHeader/>
      <LibrosForm/>
      <AppFooter/>
    </Layout>
  </Layout>
);
export default AppLayout;