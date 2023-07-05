import { Descriptions } from 'antd'
import SelectItem from '../../../../shared/entities/components/form/formItems/AppSelectItem'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const DescItem = Descriptions.Item

const ClientesContainer = props => {

  const viewDefinition = entidad =>
    entidad && 
    <>
      <DescItem label="Nombre"><b>{entidad.nombre}</b> </DescItem>
      <DescItem label="Apellido"><b>{entidad.apellido}</b> </DescItem>
      <DescItem label="Dni"><b>{entidad.dni}</b> </DescItem>
      <DescItem label="Direccion"><b>{entidad.direccion}</b> </DescItem>
    </> 

  const entityDefinition = {
    metadata: { endpoint: '/clientes', modulo: '', entidad: 'Clientes', referencia: 'clientes'},
    columns: [
      { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
      { title: 'Apellido', dataIndex: 'apellido', key: 'apellido' },
      { title: 'Dni', dataIndex: 'dni', key: 'dni' },
      { title: 'Direccion', dataIndex: 'direccion', key: 'direccion' }],
    formDefinition: {
      columns: 1,
      formItemLayout: null,
      fields: [
        { key: 'nombre', label: 'Nombre', clear: 'left', disabled: false },
        { key: 'apellido', label: 'Apellido', clear: 'left', disabled: false },
        { key: 'dni', label: 'Dni', clear: 'left', disabled: false },
        { key: 'direccion', label: 'Direccion', clear: 'left', disabled: false },
      ]},
    viewDefinition: viewDefinition,
  }
  
  return <EntitiesContainer
    {...props}
    entityDefinition={entityDefinition} />
}

export default ClientesContainer