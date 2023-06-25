import React from "react";
import { Layout } from "antd";
import AppLeftMenu from "./components/leftMenu/AppLeftMenu";
import AppHeader from "./components/header/AppHeader";
import AppBanner from "./components/banner/AppBanner";
import AppContent from "./components/content/AppContent";
import AppFooter from "./components/footer/AppFooter";
import "./AppLayout.scss";

const AppLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <AppLeftMenu />
    <Layout className="app-layout">
      <AppHeader/>
      <AppBanner/>
      <AppContent/>
      <AppFooter/>
    </Layout>
  </Layout>
);
export default AppLayout;
