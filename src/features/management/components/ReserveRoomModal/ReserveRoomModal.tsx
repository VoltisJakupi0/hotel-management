import { Row, Form, Spin, Input, Select, Button, DatePicker } from "antd";
import React, { ReactElement } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";

interface FormValues {
  roomNr: string;
  clientName: string;
  clientSurname: string;
  clientEmail: string;
  reservationDate: any;
  endReservationDate: any;
}

const initialValues = {
  roomNr: "",
  maxClientNumber: "",
  category: "",
  status: "",
  price: "",
};

function ReserveRoomModal(): ReactElement {
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
        <Form.Item name="clientName" label="Client Name">
          <Input />
        </Form.Item>
        <Form.Item name="clientSurname" label="Client Surname">
          <Input />
        </Form.Item>
        <Form.Item name="clientEmail" label="Client Email">
          <Input type="email" />
        </Form.Item>
        <Form.Item name="reservationDate" label="Reservation Date">
          <DatePicker />
        </Form.Item>
        <Form.Item name="endReservationDate" label="Leave Date">
          <DatePicker />
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
            Reserve
          </Button>
        </Row>
      </Form>
    </Spin>
  );
}

export default ReserveRoomModal;
