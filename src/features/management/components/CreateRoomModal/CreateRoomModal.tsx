import { Row, Form, Spin, Input, Select, Button } from "antd";
import React, { ReactElement } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";

interface FormValues {
  roomNr: string;
  maxClientNumber: string;
  category: string;
  status: string;
  price: string;
}

const initialValues = {
  roomNr: "",
  maxClientNumber: "",
  category: "",
  status: "",
  price: "",
};

function CreateRoomModal(): ReactElement {
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
        <Form.Item name="roomNr" label="Room Number">
          <Input />
        </Form.Item>
        <Form.Item name="maxClientNumber" label="Max Client Number">
          <Input />
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Select>
            <Select.Option value="1">Comfort</Select.Option>
            <Select.Option value="2">Premium</Select.Option>
            <Select.Option value="3">Vip</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select>
            <Select.Option value="1">Free</Select.Option>
            <Select.Option value="2">Reserved</Select.Option>
            <Select.Option value="3">Out of usage</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="price" label="Price">
          <Input type="number" />
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

export default CreateRoomModal;
