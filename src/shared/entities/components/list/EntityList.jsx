import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Table, Button, Input } from "antd"
import { PlusOutlined } from '@ant-design/icons'
import { PageHeader } from '@ant-design/pro-layout'
import EntitiesApi from "../../api/EntitiesApi"
import EntitiesView from '../view/EntityView'
import AppDeleteButton from '../buttons/AppDeleteButton'
import AppViewButton from '../buttons/AppViewButton'
import AppEditButton from '../buttons/AppEditButton'

const EntityList = props => {

    const navigate = useNavigate()
    const location = useLocation()
    const [entidades, setEntidades] = useState([])
    const [entidadesFiltrados, setEntidadesFiltrados] = useState([])
    const [working, setWorking] = useState(false)
    const [currentItem, setCurrentItem] = useState(undefined)
    const [showItem, setShowItem] = useState(false)

    useEffect(() => {
        loadEntidades()
    }, [])

    const columns =
        props.entityDefinition.columns.concat([
            {
                key: 'actions', align: 'right', render: (text, record) => {
                    return <space size='small'>
                        <AppViewButton onClick={() => {
                            setCurrentItem(record)
                            setShowItem(true)
                        }} />
                        <AppEditButton onClick={() => {
                            setCurrentItem(record)
                            navigate(location.pathname + '/edit/' + record.id)
                        }} />
                        <AppDeleteButton title='¿Está seguro que desea eliminar el registro?' onConfirm={() => deleteEtidad(record)}
                        />
                    </space>
                }
            }
        ])

    const loadEntidades = () => {
        setWorking(true)
        EntitiesApi.get(props.entityDefinition.metadata.endpoint)
            .then(response => {
                setWorking(false)
                setEntidades(response)
                setEntidadesFiltrados(response)
            })
            .catch(error => setWorking(false))
    }


    const deleteEtidad = record => {
        setWorking(true)
        EntitiesApi.delete(props.entityDefinition.metadata.endpoint, record.id)
            .then(responde => {
                setWorking(false)
                loadEntidades()
            })
            .catch(error => setWorking(false))
    }

    return <div style={{ backgroundColor: '#fff', height: '100%', padding: 8 }}>
        <PageHeader
            className='site-page-header'
            title={props.entityDefinition.metadata.entidad}
            onBack={() => navigate(-1)}
            extra={[
                <Button key='1' type="primary" icon={<PlusOutlined />}
                    onClick={() => navigate(location.pathname + '/new')}>
                    Crear {props.entityDefinition.metadata.entidad}
                </Button>
            ]} />
        <div style={{ padding: 20 }}>
            <div style={{ display: 'flex' }}>
                <Input style={{ width: 200, marginBottom: 8 }}
                    placeholder="Buscar"
                    allowClear
                    onChange={e => {
                        setEntidadesFiltrados(entidades.filter(x => x.nombre.indexOf(e.target.value) > -1))
                    }}
                    size='small' />
            </div>
            <Table
                cellspacing={0}
                rowKey={record => record.id}
                size='small'
                loading={working}
                columns={columns}
                dataSource={entidadesFiltrados}
                pagination={{ hideOnSinglePage: true, pageSize: 10, showSizeChanger: false }} />

            <EntitiesView
                open={showItem}
                onClose={() => {
                    setShowItem(false)
                    setCurrentItem(undefined)
                }}
                entidad={currentItem}
                metadata={props.entityDefinition.metadata}
                viewDefinition={props.entityDefinition.viewDefinition} />
        </div>
    </div>
}

export default EntityList