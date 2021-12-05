import { useCallback } from "react";
import { useModal } from "../modalContext";
import { ModalActions, ShowModalPayload } from "../types";

function useShowModal(): (payload: ShowModalPayload) => void {
  const [, dispatch] = useModal();

  const handleOnShow = useCallback(
    (payload: ShowModalPayload) => {
      dispatch({ type: ModalActions.showModal, payload });
    },
    [dispatch]
  );

  return handleOnShow;
}

export default useShowModal;
