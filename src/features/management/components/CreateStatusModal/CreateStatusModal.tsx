import { Row, Form, Spin, Input, Button } from "antd";
import React, { ReactElement, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";
import {
  Status,
  useAddStatusMutation,
  useEditStatusMutation,
  useGetStatusQuery,
} from "../../services/dashboardApi";
import { Rule } from "antd/es/form";

export const generalRule: Rule[] = [
  { required: true, message: "Field is required!" },
];

interface FormValues {
  status_name: string;
}

const initialValues = {
  status_name: "",
};

function CreateStatusModal({ data }: any): ReactElement {
  const [form] = useForm<FormValues>();
  const hideModal = useHideModal();

  const [addStatus] = useAddStatusMutation();
  const status = useGetStatusQuery();
  const isEdit = data?.id;
  const [editStatus] = useEditStatusMutation();

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        status_name: data.status_name,
      });
    }
  }, [isEdit]);

  const handleFinish = (values: FormValues) => {
    const payload: Status = {
      status_name: values.status_name,
    };

    if (isEdit) {
      editStatus({ payload, id: isEdit }).then(() => {
        hideModal();
        status.refetch();
      });
    } else {
      addStatus(payload).then(() => {
        hideModal();
        status.refetch();
      });
    }
  };

  return (
    <Spin spinning={false}>
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 12 }}
        form={form}
        initialValues={initialValues}
        onFinish={handleFinish}
      >
        <Form.Item
          rules={generalRule}
          name="status_name"
          label={
            localStorage.getItem("language") == "sq"
              ? "Emri Statusit"
              : "Status Name"
          }
        >
          <Input />
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

export default CreateStatusModal;
