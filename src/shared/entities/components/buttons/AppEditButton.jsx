import { Button, Tooltip } from 'antd'
import { EyeOutlined } from '@ant-design/icons'

const AppEditButton = props =>
    <Tooltip title={ props.title ? props.title : 'Ver'}>
        <Button 
            type='primary'
            shape='circle'
            size='small'
            icon={props.icon ? props.icon : <EyeOutlined/>}/>
    </Tooltip>

export default AppEditButton