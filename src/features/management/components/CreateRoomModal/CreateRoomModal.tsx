import { Row, Form, Spin, Input, Select, Button } from "antd";
import React, { ReactElement, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";
import {
  Room,
  useAddRoomMutation,
  useEditRoomMutation,
  useGetCategoriesQuery,
  useGetRoomsQuery,
  useGetStatusQuery,
} from "../../services/dashboardApi";
import { Rule } from "antd/es/form";

export const generalRule: Rule[] = [
  { required: true, message: "Field is required!" },
];

interface FormValues {
  room_number: string;
  category_id: string;
  status_id: string;
  room_price: string;
}

const initialValues = {
  room_number: "",
  category_id: "",
  status_id: "",
  room_price: "",
};

function CreateRoomModal({ data }: any): ReactElement {
  const [form] = useForm<FormValues>();
  const hideModal = useHideModal();

  const [addRoom] = useAddRoomMutation();
  const [editRoom] = useEditRoomMutation();
  const rooms = useGetRoomsQuery();
  const category = useGetCategoriesQuery();
  const status = useGetStatusQuery();

  const isEdit = data?.id;

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        room_number: data.room_number,
        category_id: data.category_id,
        status_id: data.status_id,
        room_price: data.room_price,
      });
    }
  }, [isEdit]);

  const handleFinish = (values: FormValues) => {
    const payload: Room = {
      room_number: values.room_number,
      category_id: values.category_id,
      status_id: values.status_id,
      room_price: values.room_price,
    };

    if (isEdit) {
      editRoom({ payload, id: isEdit }).then(() => {
        hideModal();
        rooms.refetch();
      });
    } else {
      addRoom(payload).then(() => {
        hideModal();
        rooms.refetch();
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
          name="room_number"
          label={
            localStorage.getItem("language") == "sq"
              ? "Numri Dhomes"
              : "Room Number"
          }
        >
          <Input />
        </Form.Item>

        <Form.Item
          rules={generalRule}
          name="category_id"
          label={
            localStorage.getItem("language") == "sq" ? "Kategoria" : "Categori"
          }
        >
          <Select>
            {category.data?.map((x: any) => {
              return (
                <Select.Option value={x.id}>{x.category_name}</Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item rules={generalRule} name="status_id" label="Status">
          <Select>
            {status.data?.map((x: any) => {
              return (
                <Select.Option value={x.id}>{x.status_name}</Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          rules={generalRule}
          name="room_price"
          label={localStorage.getItem("language") == "sq" ? "Qmimi" : "Price"}
        >
          <Input type="number" />
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

export default CreateRoomModal;
