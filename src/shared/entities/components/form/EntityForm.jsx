import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Card, Spin, notification, Row } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { FormConfig } from '../../../config/GlobalConfig'
import EntitiesApi from '../../api/EntitiesApi'
import { PageHeader } from '@ant-design/pro-layout'
import  FormBuilder  from "antd-form-builder"

const FormItem = Form.Item

const EntityForm = props => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const [working, setWorking] = useState(false)
  const [form] = Form.useForm()
  const id = location.pathname.split("/")[3]

  useEffect(() => {
    if (location.pathname.includes('/edit')) {
      loadEntidad(id)
    }
  }, [])

  const loadEntidad = id => {
    setWorking(true)
    EntitiesApi.get(props.entityDefinition.metadata.endpoint, id)
      .then(response => { form.setFieldsValue({ ...response }) })
      .catch(error => { })
      .finally(() => setWorking(false))
  }

  const onFinish = values => {
    setWorking(true)
    let data = { id: id, ...values }
    EntitiesApi.save(props.entityDefinition.metadata.endpoint, data)
      .then(response => { notification.success({ message: 'Exito',
          description: `${props.entityDefinition.metadata.entidad} guardado`, 
          placement: 'bottomRight' })
        navigate(-1)
      })
      .catch(error => { })
      .finally(() => setWorking(false))
  }

  return <div style={{ backgroundColor: '#fff', height: '100%', padding: 8 }}>
      <PageHeader
        title={`${id ? 'Editar ' : 'Crear '} ${props.entityDefinition.metadata.entidad} `}
        onBack={() => navigate(-1)} />
      <div style={{ padding: 20 }}>
        <Spin spinning={working}>
          <Card>
            <Form
              {...FormConfig.DefaultLayout}
              form={form}
              name="formulario"
              onFinish={onFinish}
              scrollToFirstError >      

              <FormBuilder meta={ props.entityDefinition.formDefinition } form={ form } />
              { id && props.entityDefinition.detailDefinition ? <Card bordered={true}>
                { props.entityDefinition.detailDefinition }
              </Card> : null }

              <Row justify="end">
                <FormItem>
                  <Button type="primary" 
                    htmlType="submit" 
                    icon={<SaveOutlined />}>
                      Guardar {props.entityDefinition.metadata.entidad}
                  </Button>
                </FormItem>
              </Row>
            </Form>
          </Card>
        </Spin>
      </div>
    </div>
}

export default EntityForm
