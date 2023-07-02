import { Descriptions } from 'antd'
import AppEnableTag from '../../../../shared/components/AppEnableTag'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const DescItem = Descriptions.Item

const VentasContainer = props => {
  const viewDefinition = entidad =>
    entidad && <>
      <DescItem label="idLibro"> {entidad.libros.id} </DescItem>
      <DescItem label="idCliente"> {entidad.clientes.id} </DescItem>
      <DescItem label="Cantidad"> {entidad.cantidad} </DescItem>
      <DescItem label="Fecha"> {entidad.fecha} </DescItem>
      <DescItem label="Total"> {entidad.total} </DescItem>
    </>
    

    const entityDefinition = {
        metadata: { endpoint: '/ventas', modulo: '', entidad: 'Ventas', referencia: 'ventas' },
        columns: [
        { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
        { title: 'idLibro', dataIndex: ['libros', 'id'], key: 'libro' },
        { title: 'idCliente', dataIndex: ['clientes', 'id'], key: 'cliente' },
        { title: 'Cantidad', dataIndex: 'cantidad', key: 'cantidad',
            render: text => <AppEnableTag value={text} />
        },
        { title: 'Fecha', dataIndex: 'fecha', key: 'fecha',
            render: text => <AppEnableTag value={text} />
        },
        { title: 'Total', dataIndex: 'total', key: 'total',
            render: text => <AppEnableTag value={text} />
        }],
    formDefinition: {
      columns: 1,
      formItemLayout: null,
      fields: [
          { key: 'libro', label: 'idLibro', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],widgetProps: { referencia: 'id', endpoint: 'libros', isShow: false }},
          { key: 'cliente', label: 'idCliente', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],widgetProps: { referencia: 'id', endpoint: 'clientes', isShow: false }},
          { key: 'cantidad', label: 'Cantidad', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }]},
          { key: 'fecha', label: 'Fecha', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }]},
          { key: 'total', label: 'Total', clear: 'left', disabled: true, rules: [{ required: true, message: 'Campo Requerido' }]}
      ]},
    viewDefinition: viewDefinition,
  }
  return <EntitiesContainer
    {...props}
    entityDefinition={entityDefinition} />
}

export default VentasContainer