import React from 'react'
import { Descriptions } from 'antd'
//import AppEnableTag from '../../../../shared/components/AppEnableTag'
//import SelectItem from '../../../../shared/entities/components/form/formItems/AppSelectItem'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const DescItem = Descriptions.Item

const UsuariosContainer = props => {
  const viewDefinition = entidad =>
    entidad && <DescItem label="Nombre"> {entidad.name} </DescItem>
    entidad && <DescItem label="Email"> {entidad.email} </DescItem>
    entidad && <DescItem label="Contraseña"> {entidad.contraseña} </DescItem>
    entidad && <DescItem label="Acceso"> {entidad.contraseña} </DescItem>


    const entityDefinition = {
        metadata: { endpoint: '/usuarios', modulo: '', entidad: 'Usuarios', referencia: 'usuarios' },
        columns: [
        { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Contraseña', dataIndex: 'contraseña', key: 'contraseña' },
        { title: 'Acceso', dataIndex: 'acceso', key: 'acceso' }],
    formDefinition: {
      columns: 1,
      formItemLayout: null,
      fields: [
        { key: 'nombre', label: 'Nombre', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],},
        { key: 'email', label: 'Email', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],},
        { key: 'contraseña', label: 'Contraseña', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],},
        { key: 'acceso', label: 'Acceso', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],}
      ]},
    viewDefinition: viewDefinition,
  }
  return <EntitiesContainer
    {...props}
    entityDefinition={entityDefinition} />
}

export default UsuariosContainer