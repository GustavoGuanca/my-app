import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import logo from '../../assets/Logo.png'
import routes from '../routes/AppRoutes'

import './AppLeftMenu.scss'

const { Sider } = Layout

const AppLeftMenu = () => {

  const navigate = useNavigate()

  const handleOnClick = e => {
    console.log('handleOnClick', e)
    navigate(e.key)
  }

  const [collapsed, onCollapse] = useState(true)

  const authRoutes = routes //.filter(item => 
  //  item.role.includes(AuthenticationHelper.getRole()))

  return <Sider className="left-menu-main"
    collapsible collapsed={collapsed}
    onCollapse={onCollapse} >
    <div className="app-layout-logo" >
      <img src={logo} alt="logo" className="logoImg" />
    </div>
    <Menu theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={authRoutes}
      onClick = {handleOnClick}>
    </Menu>
  </Sider>
}

export default AppLeftMenu