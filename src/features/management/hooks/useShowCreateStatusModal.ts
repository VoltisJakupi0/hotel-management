import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowCreateStatusModal(): () => void {
  const showModal = useShowModal();

  const showCreateStatusModal = useCallback(() => {
    const title = "Create Status";

    const modalProps: ModalProps = {
      title,
      width: "calc(100vw - 1300px)",
      bodyStyle: {
        height: "190px",
      },
    };

    const props: any = {};

    showModal({
      type: ModalTypes.CreateStatusModal,
      props,
      modalProps,
    });
  }, [showModal]);

  return showCreateStatusModal;
}

export default useShowCreateStatusModal;
