import { Row, Form, Spin, Input, Select, Button } from "antd";
import React, { ReactElement } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";

interface FormValues {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: any;
  datebirth: string;
}

const initialValues = {
  id: "",
  name: "",
  surname: "",
  email: "",
  password: "",
  role: "",
  datebirth: "",
  status: "",
};

function CreateUserModal(): ReactElement {
  const [form] = useForm<FormValues>();
  const hideModal = useHideModal();

  return (
    <Spin spinning={false}>
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 14 }}
        form={form}
        initialValues={initialValues}
      >
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="surname" label="Surname">
          <Input />
        </Form.Item>
        <Form.Item name="birthdate" label="Birthdate">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Select>
            <Select.Option value="1">Perdorues Bazik</Select.Option>
            <Select.Option value="2">Admin</Select.Option>
          </Select>
        </Form.Item>
        <Row justify="end" style={{ marginTop: 50 }}>
          <Button onClick={hideModal} danger>
            Cancel
          </Button>
          <Button
            type="primary"
            ghost
            style={{ marginLeft: 10 }}
            htmlType="submit"
          >
            Create
          </Button>
        </Row>
      </Form>
    </Spin>
  );
}

export default CreateUserModal;
