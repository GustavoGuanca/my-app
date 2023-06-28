import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Table, Button, Space, Input } from "antd"
import { PageReader } from '@ant-design/pro-layout'
import EntitiesApi from "../../api/EntitiesApi"
import EntitiesView from '../view/EntitiesView'
import AppDeleteButton from '../../../components/buttons/AppDeleteButton'
import AppViewButton from '../../../components/buttons/AppViewButton'
import AppEditButton from '../../../components/buttons/AppEditButton'

const EntityList = props => {

    const navigate = useNavigate()
    const location = useLocation()
    const[entidades, setEntidades] = useState({})
    const[entidadesFiltrados, setEntidadesFiltrados] = useState({})
    const[working, setWorking] = useState(false)
    const[currentItem, setCurrentItem] = useState(undefined)
    const[showItem, setShowItem] = useState(false)

    useEffect(() => {
        loadEntidades()
    }, [])

    const columns = 
    props.entityDefinition.columns.concat ([
        {
            key: 'actions', align: 'right', render: (text, record) => {
                return<space size='small'>
                    <AppViewButton onClick = {() => {
                        setCurrentItem(record)
                        setShowItem(true)
                    }}/>
                    <AppEditButton onClick={() => setCurrentItem(record)}/>
                </space>
            }
        }
    ])
}