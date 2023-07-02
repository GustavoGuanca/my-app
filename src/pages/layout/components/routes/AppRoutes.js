import { HomeOutlined, DollarCircleOutlined, GlobalOutlined,UserOutlined, DatabaseOutlined, BookOutlined} from '@ant-design/icons'
import LibrosContainer from '../../../domain/ventas/libros/LibrosContainer'
import ClientesContainer from '../../../domain/ventas/clientes/ClientesContainer'
import EditorialesContainer from '../../../domain/parametricas/editoriales/EditorialesContainer'
import GenerosContainer from '../../../domain/parametricas/generos/GenerosContainer'
import VentasContainer from '../../../domain/ventas/ventas/VentasContainer'
import HomePage from '../../../home/HomePage'

const routes = [
  {
    key: 'home',
    role: 'admin, user, vendedor',
    label: 'Inicio',
    url: '/home',
    menu: true,
    icon: <HomeOutlined />,
    element: <HomePage />
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
        url: '/home',
        menu: true,
        icon: <BookOutlined />,
        element: <HomePage />
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
        element: <ClientesContainer />
      },
      {
        key: 'ventas',
        role: 'admin, vendedor',
        label: 'Ventas Realizadas',
        url: '/ventas',
        icon: <DollarCircleOutlined />,
        element: <VentasContainer />
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
        element: <EditorialesContainer />
      },
      {
        key: 'generos',
        role: 'admin',
        label: 'Generos',
        url: '/generos',
        icon: <GlobalOutlined />,
        element: <GenerosContainer />
      },
      {
        key: 'libros',
        role: 'admin, vendedores',
        label: 'Libros',
        url: '/libros',
        icon: <GlobalOutlined />,
        element: <LibrosContainer />
      }
    ]
  }
]

export default routes