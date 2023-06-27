import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Layout>
      <Footer 
      style={{
        width: '100%',
        justifyContent: 'center',
        backgroundColor:'#e6fcd9',
        height: 'auto'
      }}>
        <p>@holis</p>
      </Footer>
    </Layout>
  );
};

export default AppFooter;