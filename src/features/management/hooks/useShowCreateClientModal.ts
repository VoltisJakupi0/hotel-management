import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowCreateCategoryModal(): () => void {
  const showModal = useShowModal();

  const showCreateCategoryModal = useCallback(() => {
    const title = "Create Category";

    const modalProps: ModalProps = {
      title,
      width: "calc(100vw - 1200px)",
      bodyStyle: {
        height: "190px",
      },
    };

    const props: any = {};

    showModal({
      type: ModalTypes.CreateCategoryModal,
      props,
      modalProps,
    });
  }, [showModal]);

  return showCreateCategoryModal;
}

export default useShowCreateCategoryModal;
