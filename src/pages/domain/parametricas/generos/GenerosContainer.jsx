import React from 'react'
import { Descriptions } from 'antd'
//import AppEnableTag from '../../../../shared/components/AppEnableTag'
//import SelectItem from '../../../../shared/entities/components/form/formItems/AppSelectItem'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const DescItem = Descriptions.Item

const GenerosContainer = props => {
    const viewDefinition = entidad =>
    entidad && <DescItem label="Nombre"> {entidad.name} </DescItem>

    const entityDefinition = {
        metadata: { endpoint: '/generos', modulo: '', entidad: 'Generos', referencia: 'generos' },
        columns: [
        { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' }],
    formDefinition: {
      columns: 1,
      formItemLayout: null,
      fields: [
        { key: 'nombre', label: 'Nombre', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],}
        ]},
    viewDefinition: viewDefinition,
  }
  return <EntitiesContainer
    {...props}
    entityDefinition={entityDefinition} />
}

export default GenerosContainer