import Button from "antd/es/button";
import Form, { Rule } from "antd/es/form";
import Input from "antd/es/input";
import Spin from "antd/es/spin";
import Typography from "antd/es/typography";
import React, { ReactElement } from "react";

const { Title } = Typography;

interface RegisterFormProps {
  onSubmit: (
    username: string,
    password: string,
    name: string,
    surname: string,
    personalId: string
  ) => void;
  loading: boolean;
}

interface FormValues {
  email: string;
  password: string;
  name: string;
  surname: string;
  personalId: string;
}

enum InputNames {
  Name = "name",
  Surname = "surname",
  PersonalId = "personalId",
  Email = "email",
  Password = "password",
}

const generalRule: Rule[] = [{ required: true, message: "Eingabe zwingend" }];
function RegisterForm({ onSubmit, loading }: RegisterFormProps): ReactElement {
  const [form] = Form.useForm<FormValues>();

  const handleSubmit = ({
    email,
    password,
    name,
    surname,
    personalId,
  }: FormValues): void => onSubmit(email, password, name, surname, personalId);

  return (
    <Spin spinning={loading}>
      <Title level={2}>Regjistrohu</Title>
      <Form<FormValues> form={form} onFinish={handleSubmit}>
        <Form.Item name={InputNames.Name} label="Emri" rules={generalRule}>
          <Input placeholder="Voltis" />
        </Form.Item>
        <Form.Item
          name={InputNames.Surname}
          label="Mbiemri"
          rules={generalRule}
        >
          <Input placeholder="Jakupi" />
        </Form.Item>
        <Form.Item label="E-Mail" name={InputNames.Email} rules={generalRule}>
          <Input placeholder="abc@gmail.com" />
        </Form.Item>
        <Form.Item
          name={InputNames.PersonalId}
          label="Numri i Leternjoftimit"
          rules={generalRule}
        >
          <Input placeholder="1384483" />
        </Form.Item>
        <Form.Item
          label="Fjalekalimi"
          name={InputNames.Password}
          rules={generalRule}
        >
          <Input.Password placeholder="********" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Regjistrohu
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
}

export default RegisterForm;
