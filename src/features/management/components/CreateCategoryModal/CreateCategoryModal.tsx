import { Row, Form, Spin, Input, Button } from "antd";
import React, { ReactElement, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import useHideModal from "../../../modal/hooks/useHideModal";
import {
  Category,
  useAddCategoryMutation,
  useEditCategoryMutation,
  useGetCategoriesQuery,
} from "../../services/dashboardApi";
import { Rule } from "antd/es/form";

export const generalRule: Rule[] = [
  { required: true, message: "Field is required!" },
];

interface FormValues {
  category_name: string;
}

const initialValues = {
  category_name: "",
};

function CreateCategoryModal({ data }): ReactElement {
  const [form] = useForm<FormValues>();
  const hideModal = useHideModal();
  const isEdit = data?.id;

  const [addCategory] = useAddCategoryMutation();
  const [editCategory] = useEditCategoryMutation();
  const category = useGetCategoriesQuery();

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        category_name: data.category_name,
      });
    }
  }, [isEdit]);

  const handleFinish = (values: FormValues) => {
    const payload: Category = {
      category_name: values.category_name,
    };

    if (isEdit) {
      editCategory({ payload, id: isEdit }).then(() => {
        hideModal();
        category.refetch();
      });
    } else {
      addCategory(payload).then(() => {
        hideModal();
        category.refetch();
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
          name="category_name"
          label={
            localStorage.getItem("language") == "sq"
              ? "Emri Kategorise"
              : "Category Name"
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

export default CreateCategoryModal;
