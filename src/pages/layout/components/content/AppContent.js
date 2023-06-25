import { Layout} from 'antd';
const { Content} = Layout;

const AppContent = () =>{
    return (
     
          <Content
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
           
          </Content>
          
         
     
      );
    };


export default AppContent;