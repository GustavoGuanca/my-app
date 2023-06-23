import { Layout} from 'antd';
const { Header} = Layout;
const AppHeader = () => {

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
       
      </Header>
      
     
    </Layout>
  );
};
export default AppHeader;