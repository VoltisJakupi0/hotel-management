import { Row, Form, Spin, Input, Select, Button } from "antd";
import React, { ReactElement, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";
import {
  useAddUserMutation,
  useEditUserMutation,
  useGetUsersQuery,
  User,
} from "../../services/dashboardApi";
import { Rule } from "antd/es/form";

interface FormValues {
  first_name: string;
  surname: string;
  email: string;
  passwd: string;
  role_id: any;
  personal_number: number;
}

const initialValues = {
  first_name: "",
  surname: "",
  email: "",
  passwd: "",
  role_id: "",
  datebirth: "",
  status: "",
  personal_number: "",
};

export const generalRule: Rule[] = [
  { required: true, message: "Field is required!" },
];

function CreateUserModal({ data }: any): ReactElement {
  const [form] = useForm<FormValues>();
  const [addUser] = useAddUserMutation();
  const users = useGetUsersQuery();
  const hideModal = useHideModal();
  const [editUser] = useEditUserMutation();
  const isEdit = data?.id;

  const roles = [
    { id: "2", name: "Admin" },
    {
      id: "3",
      name:
        localStorage.getItem("language") == "sq"
          ? "Perdorues Bazik"
          : "Basic User",
    },
  ];

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        first_name: data.first_name,
        surname: data.surname,
        email: data.email,
        role_id: data.role_id == 3 ? "3" : "2",
        personal_number: data.personal_number,
      });
    }
  }, [isEdit]);

  const handleFinish = (values: FormValues) => {
    const payload: User = {
      first_name: values.first_name,
      surname: values.surname,
      username: values.email,
      email: values.email,
      passwd: values.passwd,
      role_id: values.role_id,
      personal_number: values.personal_number,
    };

    if (isEdit) {
      editUser({ payload, id: isEdit }).then(() => {
        hideModal();
        users.refetch();
      });
    } else {
      addUser(payload).then(() => {
        hideModal();
        users.refetch();
      });
    }
  };

  return (
    <Spin spinning={false}>
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 14 }}
        form={form}
        initialValues={initialValues}
        onFinish={handleFinish}
      >
        <Form.Item
          rules={generalRule}
          name="first_name"
          label={localStorage.getItem("language") == "sq" ? "Emri" : "Name"}
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={generalRule}
          name="surname"
          label={
            localStorage.getItem("language") == "sq" ? "Mbiemri" : "Surname"
          }
        >
          <Input />
        </Form.Item>
        <Form.Item rules={generalRule} name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item
          rules={generalRule}
          name="personal_number"
          label={
            localStorage.getItem("language") == "sq"
              ? "Nr Personal"
              : "Personal Number"
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={generalRule}
          name="passwd"
          label={
            localStorage.getItem("language") == "sq"
              ? "Fjalekalimi"
              : "Password"
          }
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          rules={generalRule}
          name="role_id"
          label={localStorage.getItem("language") == "sq" ? "Roli" : "Role"}
        >
          <Select>
            {roles.map((x) => {
              return <Select.Option value={x.id}>{x.name}</Select.Option>;
            })}
          </Select>
        </Form.Item>

        <Row justify="end" style={{ marginTop: 50 }}>
          <Button onClick={hideModal} danger>
            {localStorage.getItem("language") == "sq" ? "Mbyll" : "Close"}
          </Button>
          <Button
            type="primary"
            ghost
            style={{ marginLeft: 10 }}
            htmlType="submit"
          >
            {isEdit
              ? localStorage.getItem("language") == "sq"
                ? "Ruaj"
                : "Save"
              : localStorage.getItem("language") == "sq"
              ? "Shto"
              : "Create"}
          </Button>
        </Row>
      </Form>
    </Spin>
  );
}

export default CreateUserModal;
