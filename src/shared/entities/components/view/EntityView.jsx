import { Card, Drawer, Descriptions } from 'antd'

const EntityView = props => {
    console.log("EntityView...")
return <Drawer
    title={`${props.metadata.entidad}:`}
    placement='right'
    closable={true}
    open={props.open}
    onClose={props.onClose}
    width={550}>
    <Card>
        <Descriptions bordered size='small' column={1}>
        {props.viewDefinition(props.entidad)}
        </Descriptions>
    </Card>
</Drawer>

}

export default EntityView