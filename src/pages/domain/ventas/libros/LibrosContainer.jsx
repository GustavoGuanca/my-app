import { Descriptions } from 'antd'
import EntitiesContainer from '../../../../shared/entities/EntitiesContainer'

const DescItem = Descriptions.Item

const LibrosContainer = props => {
  const viewDefinition = entidad =>
    entidad && <>
      <DescItem label="Nombre"> {entidad.nombre} </DescItem>
      <DescItem label="idGenero"> {entidad.idGenero} </DescItem>
      <DescItem label="idEditorial"> {entidad.idEditorial} </DescItem>
      <DescItem label="Stock"> {entidad.stock} </DescItem>
      <DescItem label="Precio"> {entidad.precio} </DescItem>
      <DescItem label="Autor"> {entidad.autor} </DescItem>
    </> 
 
    const entityDefinition = {
        metadata: { endpoint: '/libros', modulo: '', entidad: 'Libros', referencia: 'libros' },
        columns: [
        { title: 'Nombre', dataIndex: 'nombre', key: 'nombre' },
        { title: 'idGenero', dataIndex: 'idGenero', key: 'genero' },
        { title: 'idEditorial', dataIndex: 'idEditorial', key: 'editorial' },
        { title: 'Stock', dataIndex: 'stock', key: 'stock' },
        { title: 'Precio', dataIndex: 'precio', key: 'precio'},
        { title: 'Autor', dataIndex: 'autor', key: 'autor' }],
      formDefinition: {
      columns: 1,
      formItemLayout: null,
      fields: [
        { key: 'nombre', label: 'Nombre', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],},
        { key: 'idGenero', label: 'idGenero', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }],},
        { key: 'idEditorial', label: 'idEditorial', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }]},
        { key: 'stock', label: 'Stock', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }]},
        { key: 'precio', label: 'Precio', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }]},
        { key: 'autor', label: 'Autor', clear: 'left', disabled: false, rules: [{ required: true, message: 'Campo Requerido' }]}
      ]},
    viewDefinition: viewDefinition,
  }
  return <>
  <EntitiesContainer
    {...props}
    entityDefinition={entityDefinition} />
  </>
    
}

export default LibrosContainer