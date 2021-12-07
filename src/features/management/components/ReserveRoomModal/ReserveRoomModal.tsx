import { Row, Form, Spin, Input, Select, Button, DatePicker } from "antd";
import React, { ReactElement } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";
import moment from "moment";

function disableDateRanges({ startDate, endDate }) {
  return function disabledDate(current) {
    let startCheck = true;
    let endCheck = true;
    if (startDate) {
      startCheck = current && current < moment(startDate, "YYYY-MM-DD");
    }
    if (endDate) {
      endCheck = current && current > moment(endDate, "YYYY-MM-DD");
    }
    return (startDate && startCheck) || (endDate && endCheck);
  };
}

interface FormValues {
  clientName: string;
  clientSurname: string;
  clientEmail: string;
  reservationDate: any;
  endReservationDate: any;
}

const initialValues = {
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
          <DatePicker
            style={{ width: 361 }}
            disabledDate={(current) => {
              let customDate = moment().format("YYYY-MM-DD");
              return current && current < moment(customDate, "YYYY-MM-DD");
            }}
          />
        </Form.Item>
        <Form.Item name="endReservationDate" label="Leave Date">
          <DatePicker
            style={{ width: 361 }}
            disabledDate={(current) => {
              let customDate = moment().format("YYYY-MM-DD");
              return current && current < moment(customDate, "YYYY-MM-DD");
            }}
          />
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
