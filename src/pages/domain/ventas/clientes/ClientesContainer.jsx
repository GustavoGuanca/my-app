import { Descriptions } from 'antd'
import AppEnableTag from '../../../../shared/components/AppEnableTag'
import SelectItem from '../../../../shared/entities/components/form/formItems/AppSelectItem'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const DescItem = Descriptions.Item

const ClientesContainer = props => {

  const viewDefinition = entidad =>
    entidad && <DescItem label="Nombre"> {entidad.name} </DescItem>

  const entityDefinition = {
    metadata: { endpoint: '/cliente', modulo: '', entidad: 'Cliente', referencia: 'cliente'},
    columns: [
      { title: 'Nombre', dataIndex: 'name', key: 'name' },
      { title: 'CategoriaIva', dataIndex: ['categoriaiva', 'name'], key: 'categoriaiva' },
      { title: 'Estado', dataIndex: 'estado', key: 'estado',
        render: text => <AppEnableTag value={text} />
      }],
    formDefinition: {
      columns: 1,
      formItemLayout: null,
      fields: [
        { key: 'name', label: 'Nombre', clear: 'left', disabled: false },
        { key: 'categoriaiva_id', label: 'CategoriaIva', widget: SelectItem,
        rules: [{ required: true, message: 'Campo Requerido' }],
        widgetProps: { referencia: 'categoriaiva_id', endpoint: 'categoriaiva' } }
      ]},
    viewDefinition: viewDefinition,
  }
  
  return <EntitiesContainer
    {...props}
    entityDefinition={entityDefinition} />
}

export default ClientesContainer