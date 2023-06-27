import { HomeOutlined, DollarCircleOutlined, GlobalOutlined,UserOutlined, DatabaseOutlined, BookOutlined} from '@ant-design/icons';

const routes = [
  {
    key: 'home',
    role: 'admin, user, vendedor',
    label: 'Inicio',
    url: '/home',
    menu: true,
    icon: <HomeOutlined />,
    //element: <HomePage />
  },
  {
    key: 'productos',
    role: 'admin',
    label: 'Productos',
    url: '/productos',
    menu: true,
    icon: <BookOutlined />,
    children: [
      {
        key: 'libros',
        role: 'admin, user, venderor',
        label: 'Libros',
        url: '/libros',
        menu: true,
        icon: <BookOutlined />,
        //element: <HomePage />
      }
    ]
  },
  {
    key: 'ventas',
    role: 'admin, vendedor',
    label: 'Ventas',
    url: '/cajas',
    menu: true,
    icon: <DollarCircleOutlined />,
    children: [
      {
        key: 'clientes',
        role: 'admin, vendedor',
        label: 'Clientes',
        url: '/clientes',
        icon: <UserOutlined />,
        //  element: <ClientesContainer />
      },
      {
        key: 'ventasRealizadas',
        role: 'admin, vendedor',
        label: 'Ventas Realizadas',
        url: '/ventas',
        icon: <DollarCircleOutlined />,
      //  element: <ClientesContainer />
      }
    ]
  },
  {
    key: 'parametricas',
    role: 'admin, vendedor',
    label: 'Administración',
    url: '/parametricas',
    menu: true,
    icon: <DatabaseOutlined />,
    children: [
      {
        key: 'editoriales',
        role: 'admin',
        label: 'Editoriales',
        url: '/editoriales',
        icon: <GlobalOutlined />,
        //element: <CategoriaIvasContainer />
      },
      {
        key: 'generos',
        role: 'admin',
        label: 'Generos',
        url: '/generos',
        icon: <GlobalOutlined />,
        //element: <CategoriaIvasContainer />
      },
      {
        key: 'admLibris',
        role: 'admin, vendedores',
        label: 'Libros',
        url: '/libros',
        icon: <GlobalOutlined />,
        //element: <CategoriaIvasContainer />
      }
    ]
  }
];

export default routes;