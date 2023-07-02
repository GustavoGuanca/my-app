import { Descriptions } from 'antd'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const DescItem = Descriptions.Item

const EditorialesContainer = props => {
  const viewDefinition = entidad =>
    entidad && <DescItem label="Nombre"> {entidad.name} </DescItem>

    const entityDefinition = {
        metadata: { endpoint: '/editoriales', modulo: '', entidad: 'Editoriales', referencia: 'editoriales' },
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

export default EditorialesContainer