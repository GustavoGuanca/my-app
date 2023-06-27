import React, { useState } from "react";
import { Form, Card, Input, Button } from "antd";

const FormItem = Form.Item;

const VentasForm = () => {

  const [working] = useState(false);

  return (
    <Card bordered={true} style={{width:'40%', marginLeft:'410px', marginTop:'50px'}}>
      <p>Holis</p>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        labelAlign="left"
        // onFinish={onFinish}
      >
        <FormItem 
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Ingresa email de usuario por favor." },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: "El password es requerido." }]}
        >
          <Input.Password />
        </FormItem>
        <FormItem {...{ wrapperCol: { span: 24 } }}>
          <Button block type="primary" htmlType="submit" loading={working}>
            Ingresar
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
};

export default VentasForm;