import Button from "antd/es/button";
import Form, { Rule } from "antd/es/form";
import Input from "antd/es/input";
import Spin from "antd/es/spin";
import Typography from "antd/es/typography";
import React, { ReactElement } from "react";

const { Title } = Typography;

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  loading: boolean;
}

interface FormValues {
  email: string;
  password: string;
}

enum InputNames {
  Email = "email",
  Password = "password",
}

const generalRule: Rule[] = [{ required: true, message: "Eingabe zwingend" }];
function LoginForm({ onSubmit, loading }: LoginFormProps): ReactElement {
  const [form] = Form.useForm<FormValues>();

  const handleSubmit = ({ email, password }: FormValues): void =>
    onSubmit(email, password);

  return (
    <Spin spinning={loading}>
      <Title level={2}>Menaxhimi i Hotelierise</Title>
      <Title level={4}>Kyquni</Title>
      <Form<FormValues> form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="E-Mail" name={InputNames.Email} rules={generalRule}>
          <Input placeholder="E-Mail" />
        </Form.Item>
        <Form.Item
          label="Fjalekalimi"
          name={InputNames.Password}
          rules={generalRule}
        >
          <Input.Password placeholder="*******" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Kyqu
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
}

export default LoginForm;
