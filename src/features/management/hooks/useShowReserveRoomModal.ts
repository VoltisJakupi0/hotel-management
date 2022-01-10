import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowReserveRoomModal(): (payload?: {
  id: number;
  client_name?: any;
  client_surname?: any;
  client_email?: any;
  room_id?: any;
  room_price?: any;
  entry_date?: any;
  leave_date?: any;
  client_personal_number?: any;
  room_number?: any;
  status?: any;
}) => void {
  const showModal = useShowModal();

  const showReserveRoomModal = useCallback(
    ({
      client_name,
      client_surname,
      client_email,
      room_id,
      room_price,
      entry_date,
      leave_date,
      client_personal_number,
      room_number,
      id,
      status,
    }) => {
      const title =
        localStorage.getItem("language") == "sq"
          ? "Rezervo Dhomen"
          : "Book a Room";

      const modalProps: ModalProps = {
        title,
        width: "calc(100vw - 1200px)",
        bodyStyle: {
          height: "430px",
        },
      };

      const data = {
        id,
        client_name,
        client_surname,
        client_email,
        room_id,
        room_price,
        entry_date,
        leave_date,
        client_personal_number,
        room_number,
        status,
      };

      const props: any = {
        data: data ?? {},
      };

      showModal({
        type: ModalTypes.ReserveRoomModal,
        props,
        modalProps,
      });
    },
    [showModal]
  );

  return showReserveRoomModal;
}

export default useShowReserveRoomModal;
