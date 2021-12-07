import { Row, Form, Spin, Input, Button } from "antd";
import React, { ReactElement } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";

interface FormValues {
  categoryName: string;
}

const initialValues = {
  categoryName: "",
};

function CreateClientModal(): ReactElement {
  const [form] = useForm<FormValues>();
  const hideModal = useHideModal();

  return (
    <Spin spinning={false}>
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 12 }}
        form={form}
        initialValues={initialValues}
      >
        <Form.Item name="categoryName" label="Category Name">
          <Input />
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

export default CreateClientModal;
