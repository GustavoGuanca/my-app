import React from "react";
import { Layout } from "antd";
import AppLeftMenu from "../layout/components/leftMenu/AppLeftMenu";
import AppHeader from "../layout/components/header/AppHeader";
import AppFooter from "../layout/components/footer/AppFooter";
import ClientesForm from "../../shared/entities/components/form/ClientesForm";

const AppLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <AppLeftMenu />
    <Layout className="app-layout">
      <AppHeader/>
      <ClientesForm/>
      <AppFooter/>
    </Layout>
  </Layout>
);
export default AppLayout;