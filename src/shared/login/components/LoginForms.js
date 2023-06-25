import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Card, Input, Button } from "antd";
import LoginApi from "../api/LoginApi";
import './LoginForm.css'

const FormItem = Form.Item;

const LoginForm = () => {
  const navigate = useNavigate();
  const [working, setWorking] = useState(false);

  const onFinish = (values) => {
    setWorking(true);
    LoginApi.Login(values.email, values.password)
      .then((response) => {
        setWorking(false);
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        navigate("/login");
      });
  };

  return (
    <Card bordered={true}>
      <Form className="transparent-form"
        name="basic"
        initialValues={{ remember: true }}
        labelAlign="left"
        onFinish={onFinish}
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

export default LoginForm;