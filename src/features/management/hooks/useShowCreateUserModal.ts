import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowCreateUserModal(): () => void {
  const showModal = useShowModal();

  const showCreateUserModal = useCallback(() => {
    const title = "Create User";

    const modalProps: ModalProps = {
      title,
      width: "calc(100vw - 1200px)",
      bodyStyle: {
        height: "430px",
      },
    };

    const props: any = {};

    showModal({
      type: ModalTypes.CreateUserModal,
      props,
      modalProps,
    });
  }, [showModal]);

  return showCreateUserModal;
}

export default useShowCreateUserModal;
