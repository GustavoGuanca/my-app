import React, { useState } from "react";
import { Form, Card, Input, Button, Select } from "antd";

const FormItem = Form.Item;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const LibrosForm = () => {
  const [formularioHabilitado, setFormularioHabilitado] = useState(true);
  
  const handleInputChange = (event) => {
    // Lógica para manejar los cambios en los campos del formulario
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
  };

  const handleDeshabilitarFormulario = () => {
    setFormularioHabilitado(false);
  };

  const [working] = useState(false);

  return (
    <Card bordered={true} style={{marginRight:'20px'}} >
      <h1 style={{width:'20px'}}/>Administración de Libros
      <p/>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        labelAlign="left"
        // onFinish={onFinish}
      >
        <FormItem 
          label="Nombre"
          name="nombre"
          rules={[
            { required: true, message: "Ingresa nombre del libro por favor." },
          ]}
        >
          <Input disabled={!formularioHabilitado} />
        </FormItem>
        <FormItem 
          label="Genero"
          name="genero"
          rules={[
            { required: true, message: "Seleccionar un genero por favor." },
          ]}
        >
          <Select
          style={{ width: 120 }}
          onChange={handleChange}
          disabled={!formularioHabilitado}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled'},
          ]}
        />
        </FormItem>
        <FormItem
          label="Editorial"
          name="editorial"
          rules={[{ required: true, message: "Seleccione una editorial, por favor." }]}
        >
          <Select
          style={{ width: 120 }}
          onChange={handleChange}
          disabled={!formularioHabilitado}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled'},
          ]}/>
        </FormItem>
        <FormItem
          label="Stock"
          name="stock"
          rules={[{ required: true, message: "Ingrese un stock, por favor." }]}
        >
          <Input disabled={!formularioHabilitado}/>
        </FormItem>
        <FormItem
          label="Precio"
          name="precio"
          rules={[{ required: true, message: "Ingrese un precio, por favor." }]}
        >
          <Input disabled={!formularioHabilitado}/>
        </FormItem>
        <FormItem {...{ wrapperCol: { span: 12 } }}>
          <Button block type="primary" htmlType="submit" loading={working}
          disabled={!formularioHabilitado}
          style={{
            marginLeft:'115px',
            backgroundColor: "brown"
          }}>
            Guardar
          </Button>
        </FormItem>
      </Form>
    </Card>
  );
};

export default LibrosForm;