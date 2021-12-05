import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowCreateRoomModal(): () => void {
  const showModal = useShowModal();

  const showCreateRoomModal = useCallback(() => {
    const title = "Create Room";

    const modalProps: ModalProps = {
      title,
      width: "calc(100vw - 1100px)",
      bodyStyle: {
        height: "430px",
      },
    };

    const props: any = {};

    showModal({
      type: ModalTypes.CreateRoomModal,
      props,
      modalProps,
    });
  }, [showModal]);

  return showCreateRoomModal;
}

export default useShowCreateRoomModal;
