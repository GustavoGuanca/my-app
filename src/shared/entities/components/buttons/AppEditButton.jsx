import { Button, Tooltip } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const AppEditButton = props =>
    <Tooltip title={ props.title ? props.title : 'Editar'}>
        <Button 
            type='primary'
            shape='circle'
            size='small'
            icon={props.icon ? props.icon : <EditOutlined/>}
            onClick={props.onClick}/>
    </Tooltip>

export default AppEditButton