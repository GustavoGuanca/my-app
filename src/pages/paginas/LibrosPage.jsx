import React, {useState} from "react";
import { Layout, Button, Row, Col, Table} from "antd";
import AppLeftMenu from "../layout/components/leftMenu/AppLeftMenu";
import AppHeader from "../layout/components/header/AppHeader";
import AppFooter from "../layout/components/footer/AppFooter";
import LibrosForm from '../../shared/entities/components/form/LibrosForm'
import fondo from '../layout/assets/fondoClientes.jpg'
import { Content } from "antd/es/layout/layout";


const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
    },
    {
      title: 'Genero',
      dataIndex: 'genero',
    },
    {
      title: 'Editorial',
      dataIndex: 'editorial',
    },
    ,
    {
      title: 'Precio',
      dataIndex: 'precio',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
    }

  ];
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      nombre: `Cazadores de Sombras ${i}`,
      genero: 32,
      editorial: 'Los Andes',
      precio: '$10',
      stock: i,
    });
  };

  

const AppLayout = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  
  return(
  <Layout style={{ minHeight: "100vh"}}>
    <AppLeftMenu />
    <Layout className="app-layout" style={{backgroundImage: `url(${fondo})`}}>
      <AppHeader/>
      <Content>
        <h1 style={{color:'white', fontSize:'45px', textAlign:'left', marginLeft:'20px',
          textShadow: '#0f2549d1 7px 5px 0px'
        }}>LIBROS</h1>
        <div>
          <Row>
            <Col span={4}>
              <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                Modificar
              </Button>

              <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading} style={{marginLeft:'4px'}}>
                Eliminar
              </Button>
            </Col>
          </Row>
          <span
            style={{
              marginLeft: 8,
            }}
          >
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
      </div>
        <Row>
          <Col span={12}><Table rowSelection={rowSelection} columns={columns} dataSource={data} style={{marginLeft:'20px'}}/></Col>
          <Col span={2}/>
          <Col span={10}><LibrosForm /></Col>
        </Row>
      </Content>
      <AppFooter/>
    </Layout>
  </Layout>
)};
export default AppLayout;