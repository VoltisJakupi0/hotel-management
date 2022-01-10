import { ModalProps } from "antd";
import { useCallback } from "react";
import useShowModal from "../../modal/hooks/useShowModal";
import { ModalTypes } from "../../modal/types";

function useShowCreateUserModal(): (payload?: {
  first_name?: string;
  surname?: string;
  role_id?: number;
  id?: number;
  email?: string;
  username?: string;
  personal_number?: string;
}) => void {
  const showModal = useShowModal();

  const showCreateUserModal = useCallback(
    ({
      first_name,
      surname,
      role_id,
      id,
      email,
      username,
      personal_number,
    }) => {
      const title =
        localStorage.getItem("language") == "sq"
          ? "Krijo Perdorues"
          : "Create User";

      const modalProps: ModalProps = {
        title,
        width: "calc(100vw - 1200px)",
        bodyStyle: {
          height: "430px",
        },
      };

      const data = {
        first_name,
        surname,
        role_id,
        id,
        email,
        username,
        personal_number,
      };
      const props: any = {
        data: data ?? {},
      };

      showModal({
        type: ModalTypes.CreateUserModal,
        props,
        modalProps,
      });
    },
    [showModal]
  );

  return showCreateUserModal;
}

export default useShowCreateUserModal;
