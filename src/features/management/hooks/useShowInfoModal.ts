import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowInfoModal(): () => void {
  const showModal = useShowModal();

  const showInfoModal = useCallback(() => {
    const modalProps: ModalProps = {
      title:
        localStorage.getItem("language") == "sq" ? "   Manuali" : "   Manual",
      width: "calc(100vw - 1200px)",
      bodyStyle: {
        height: "590px",
      },
    };

    showModal({
      type: ModalTypes.CreateCategoryModal,
      modalProps,
    });
  }, [showModal]);

  return showInfoModal;
}

export default useShowInfoModal;
