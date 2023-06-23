import React from 'react'
import HomePage from '../../../home/HomePage'
import { HomeOutlined, DollarCircleOutlined, GlobalOutlined, DatabaseOutlined } from '@ant-design/icons';
import CategoriaIvasContainer from '../../../domain/parametricas/categoriaivas/CategoriaIvasContainer'
import ClientesContainer from '../../../domain/ventas/clientes/ClientesContainer'

const routes = [
  { key: 'home', role: 'admin', label: 'Inicio',
    url: '/home', menu: true, icon: <HomeOutlined />, element: <HomePage />
  },
  { key: 'ventas', role: 'admin', label: 'Ventas',
    url: '/cajas', menu: true, icon: <DollarCircleOutlined />,
    children: [
      { key: 'clientes', role: 'admin', label: 'Clientes',
        url: '/clientes', icon: <GlobalOutlined />, element: <ClientesContainer />
      },
    ]
  },
  { key: 'parametricas', role: 'admin', label: 'Administraciion',
    url: '/parametricas', menu: true, icon: <DatabaseOutlined />,
    children: [
      { key: 'categoriaivas', role: 'admin', label: 'Categoria Iva',
        url: '/categoriaivas', icon: <GlobalOutlined />, element: <CategoriaIvasContainer />
      },
    ]
  },
]

export default routes