import { Row, Form, Spin, Input, Select, Button, DatePicker } from "antd";
import React, { ReactElement, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";
import moment from "moment";
import {
  BookedRoom,
  useAddBookedRoomMutation,
  useEditBookedRoomMutation,
  useEditRoomMutation,
  useGetBookedRoomsQuery,
} from "../../services/dashboardApi";
import dayjs from "dayjs";
import { Rule } from "antd/es/form";
import { useHistory } from "react-router-dom";

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

export const generalRule: Rule[] = [
  { required: true, message: "Field is required!" },
];

interface FormValues {
  client_name: string;
  client_surname: string;
  client_email: string;
  client_personal_number: number;
  entry_date: any;
  leave_date: any;
}

const initialValues = {
  client_name: "",
  client_surname: "",
  client_email: "",
  client_personal_number: 0,
  entry_date: "",
  leave_date: "",
};

function ReserveRoomModal({ data }: any): ReactElement {
  const [form] = useForm<FormValues>();
  const hideModal = useHideModal();
  const history = useHistory();

  const isEdit = data?.id;

  const [reserveRoom] = useAddBookedRoomMutation();
  const [editRoom] = useEditBookedRoomMutation();

  const bookedrooms = useGetBookedRoomsQuery();

  useEffect(() => {
    if (isEdit && data.client_name) {
      console.log(moment(data.leave_date, "DD-MM-YYYY"));
      form.setFieldsValue({
        client_name: data.client_name,
        client_surname: data.client_surname,
        client_email: data.client_email,
        client_personal_number: data.client_personal_number,
        entry_date: moment(data.entry_date, "DD-MM-YYYY"),
        leave_date: moment(data.leave_date, "DD-MM-YYYY"),
      });
    }
  }, [isEdit]);

  const handleFinish = (values: FormValues) => {
    const payload: BookedRoom = {
      room_id: data.client_name ? data?.room_id : data?.id,
      client_name: values.client_name,
      client_surname: values.client_surname,
      client_email: values.client_email,
      client_personal_number: values.client_personal_number,
      entry_date: moment(values.entry_date).format("DD-MM-YYYY").toString(),
      leave_date: moment(values.leave_date).format("DD-MM-YYYY").toString(),
    };

    if (isEdit && data?.client_name) {
      editRoom({ payload, id: isEdit }).then(() => {
        hideModal();
        bookedrooms.refetch();
      });
    } else {
      reserveRoom(payload).then(() => {
        hideModal();
        bookedrooms.refetch();
        history.push("reservation-rooms");
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
          name="client_name"
          label={
            localStorage.getItem("language") == "sq"
              ? "Emri Klientit"
              : "Client Name"
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={generalRule}
          name="client_surname"
          label={
            localStorage.getItem("language") == "sq"
              ? "Mbiemri Klientit"
              : "Client Surname"
          }
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={generalRule}
          name="client_email"
          label={
            localStorage.getItem("language") == "sq"
              ? "Emaili Klientit"
              : "Client Email"
          }
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          rules={generalRule}
          name="client_personal_number"
          label={
            localStorage.getItem("language") == "sq"
              ? "Numri Personal"
              : "Personal Number"
          }
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          rules={generalRule}
          name="entry_date"
          label={
            localStorage.getItem("language") == "sq"
              ? "Data e Rezervimit"
              : "Reservation Date"
          }
        >
          <DatePicker
            style={{ width: 361 }}
            disabledDate={(current) => {
              let customDate = moment().format("YYYY-MM-DD");
              return current && current < moment(customDate, "YYYY-MM-DD");
            }}
          />
        </Form.Item>

        <Form.Item
          rules={generalRule}
          name="leave_date"
          label={
            localStorage.getItem("language") == "sq"
              ? "Data e Leshimit"
              : "Leave Date"
          }
        >
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
            {localStorage.getItem("language") == "sq" ? "Mbyll" : "Close"}
          </Button>
          <Button
            type="primary"
            ghost
            style={{ marginLeft: 10 }}
            htmlType="submit"
          >
            {data.client_name && isEdit
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

export default ReserveRoomModal;
