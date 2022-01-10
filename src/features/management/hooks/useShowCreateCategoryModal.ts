import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowCreateCategoryModal(): (payload?: {
  id?: number;
  category_name?: string;
}) => void {
  const showModal = useShowModal();

  const showCreateCategoryModal = useCallback(
    ({ category_name, id }) => {
      const title =
        localStorage.getItem("language") == "sq"
          ? "Krijo Kategorine"
          : "Create Category";

      const modalProps: ModalProps = {
        title,
        width: "calc(100vw - 1200px)",
        bodyStyle: {
          height: "190px",
        },
      };

      const data = {
        id,
        category_name,
      };

      const props: any = {
        data: data ?? {},
      };

      showModal({
        type: ModalTypes.CreateCategoryModal,
        props,
        modalProps,
      });
    },
    [showModal]
  );

  return showCreateCategoryModal;
}

export default useShowCreateCategoryModal;
