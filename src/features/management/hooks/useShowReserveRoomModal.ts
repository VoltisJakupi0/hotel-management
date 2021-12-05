import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowReserveRoomModal(): () => void {
  const showModal = useShowModal();

  const showReserveRoomModal = useCallback(() => {
    const title = "Book a Room";

    const modalProps: ModalProps = {
      title,
      width: "calc(100vw - 1200px)",
      bodyStyle: {
        height: "430px",
      },
    };

    const props: any = {};

    showModal({
      type: ModalTypes.ReserveRoomModal,
      props,
      modalProps,
    });
  }, [showModal]);

  return showReserveRoomModal;
}

export default useShowReserveRoomModal;
