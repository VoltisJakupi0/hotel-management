import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowCreateRoomModal(): (payload?: {
  id?: number;
  room_price?: number;
  room_number?: number;
  category_id?: number;
  status_id?: number;
}) => void {
  const showModal = useShowModal();

  const showCreateRoomModal = useCallback(
    ({ id, room_price, room_number, category_id, status_id }) => {
      const title =
        localStorage.getItem("language") == "sq"
          ? "Krijo Dhomen"
          : "Create Room";

      const modalProps: ModalProps = {
        title,
        width: "calc(100vw - 1100px)",
        bodyStyle: {
          height: "380px",
        },
      };

      const data = {
        id,
        room_price,
        room_number,
        category_id,
        status_id,
      };

      const props: any = {
        data: data ?? {},
      };

      showModal({
        type: ModalTypes.CreateRoomModal,
        props,
        modalProps,
      });
    },
    [showModal]
  );

  return showCreateRoomModal;
}

export default useShowCreateRoomModal;
