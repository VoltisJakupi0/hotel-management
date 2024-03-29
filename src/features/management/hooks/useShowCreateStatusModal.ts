import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowCreateStatusModal(): (payload?: {
  id?: number;
  status_name?: string;
}) => void {
  const showModal = useShowModal();

  const showCreateStatusModal = useCallback(
    ({ id, status_name }) => {
      const title =
        localStorage.getItem("language") == "sq"
          ? "Krijo Statusin"
          : "Create Status";

      const modalProps: ModalProps = {
        title,
        width: "calc(100vw - 1300px)",
        bodyStyle: {
          height: "190px",
        },
      };

      const data = {
        id,
        status_name,
      };

      const props: any = {
        data: data ?? {},
      };

      showModal({
        type: ModalTypes.CreateStatusModal,
        props,
        modalProps,
      });
    },
    [showModal]
  );

  return showCreateStatusModal;
}

export default useShowCreateStatusModal;
