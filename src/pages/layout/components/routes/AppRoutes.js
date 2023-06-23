import { HomeOutlined, DollarCircleOutlined, GlobalOutlined, DatabaseOutlined } from '@ant-design/icons';

const routes = [
  {
    key: 'home',
    role: 'admin, user',
    label: 'Inicio',
    url: '/home',
    menu: true,
    icon: <HomeOutlined />,
    //element: <HomePage />
  },
  {
    key: 'ventas',
    role: 'admin, vendor',
    label: 'Ventas',
    url: '/cajas',
    menu: true,
    icon: <DollarCircleOutlined />,
    children: [
      {
        key: 'clientes',
        role: 'admin, vendor',
        label: 'Clientes',
        url: '/clientes',
        icon: <GlobalOutlined />,
      //  element: <ClientesContainer />
      }
    ]
  },
  {
    key: 'parametricas',
    role: 'admin',
    label: 'Administración',
    url: '/parametricas',
    menu: true,
    icon: <DatabaseOutlined />,
    children: [
      {
        key: 'categoriaivas',
        role: 'admin',
        label: 'Categoria Iva',
        url: '/categoriaivas',
        icon: <GlobalOutlined />,
        //element: <CategoriaIvasContainer />
      }
    ]
  }
];

export default routes;