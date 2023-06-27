import React from "react";
import { Layout, Button, Row, Col, Table, Divider} from "antd";
import AppLeftMenu from "../layout/components/leftMenu/AppLeftMenu";
import AppHeader from "../layout/components/header/AppHeader";
import AppFooter from "../layout/components/footer/AppFooter";
import LibrosForm from '../../shared/entities/components/form/LibrosForm'
import fondo from '../layout/assets/fondoClientes.jpg'
import { Content } from "antd/es/layout/layout";


interface DataType {
  key: React.Key;
  nombre: String,
  genero: String,
  editorial: String,
  precio: float,
  stock: Number,
}
const columns: ColumnsType<DataType> = [
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
  
  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      nombre: `Cazadores de Sombras ${i}`,
      genero: 32,
      editorial: 'Los Andes',
      precio: '$10',
      stock: i,
    });
  }

const AppLayout = () => (
  <Layout style={{ minHeight: "100vh"}}>
    <AppLeftMenu />
    <Layout className="app-layout" style={{backgroundImage: `url(${fondo})`}}>
      <AppHeader/>
      <Content>
        <h1 style={{color:'white', fontSize:'45px', textAlign:'left', marginLeft:'20px',
          textShadow: '#0f2549d1 7px 5px 0px'
        }}>LIBROS</h1>
        <Row style={{marginTop:'20px'}}>
          <Col span={12}><Table columns={columns} dataSource={data} style={{marginLeft:'20px'}}/></Col>
          <Col span={2}/>
          <Col span={10}><LibrosForm /></Col>
        </Row>
      </Content>
      <AppFooter/>
    </Layout>
  </Layout>
);
export default AppLayout;

// import React, { useState } from 'react';
// import { Button, Table } from 'antd';
// import type { ColumnsType } from 'antd/es/table';

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

// const columns: ColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//   },
// ];

// const data: DataType[] = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

// const App: React.FC = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
//   const [loading, setLoading] = useState(false);

//   const start = () => {
//     setLoading(true);
//     // ajax request after empty completing
//     setTimeout(() => {
//       setSelectedRowKeys([]);
//       setLoading(false);
//     }, 1000);
//   };

//   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
//     console.log('selectedRowKeys changed: ', newSelectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };
//   const hasSelected = selectedRowKeys.length > 0;

//   return (
//     <div>
//       <div style={{ marginBottom: 16 }}>
//         <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
//           Reload
//         </Button>
//         <span style={{ marginLeft: 8 }}>
//           {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
//         </span>
//       </div>
//       <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//     </div>
//   );
// };

// export default App;