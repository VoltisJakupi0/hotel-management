import Modal from "antd/es/modal";
import React, { lazy, ReactElement, Suspense } from "react";
import useHideModal from "../hooks/useHideModal";
import { useModal } from "../modalContext";
import { ModalTypes } from "../types";
import styles from "./ModalRoot.module.css";

const CreateUserModal = lazy(
  () => import("../../management/components/CreateUserModal/CreateUserModal")
);

const CreateCategoryModal = lazy(
  () => import("../../management/components/ShowInfoModal/ShowInfoModal")
);

const CreateStatusModal = lazy(
  () =>
    import("../../management/components/CreateStatusModal/CreateStatusModal")
);

const CreateRoomModal = lazy(
  () => import("../../management/components/CreateRoomModal/CreateRoomModal")
);

const ReserveRoomModal = lazy(
  () => import("../../management/components/ReserveRoomModal/ReserveRoomModal")
);

const ShowInfoModal = lazy(
  () => import("../../management/components/ShowInfoModal/ShowInfoModal")
);

const Modals = {
  [ModalTypes.CreateUserModal]: CreateUserModal,
  [ModalTypes.CreateCategoryModal]: CreateCategoryModal,
  [ModalTypes.CreateStatusModal]: CreateStatusModal,
  [ModalTypes.CreateRoomModal]: CreateRoomModal,
  [ModalTypes.ReserveRoomModal]: ReserveRoomModal,
  [ModalTypes.ShowInfoModal]: ShowInfoModal,
  [ModalTypes.Empty]: () => null,
};

export interface BoundInterface {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

function ModalRoot(): ReactElement {
  const [modal] = useModal();
  const handleOnClose = useHideModal();
  const ModalView = Modals[modal.type];

  const className = modal.className ?? styles.modal;
  const { modalProps } = modal;

  return (
    <Modal
      visible={Boolean(modal.type)}
      onCancel={handleOnClose}
      className={className}
      wrapClassName={styles.modalWrapper}
      centered
      footer={null}
      destroyOnClose
      {...modalProps}
    >
      <Suspense fallback={<div>Bitte warten...</div>}>
        <ModalView {...modal.props} onClose={handleOnClose} />
      </Suspense>
    </Modal>
  );
}

export default ModalRoot;
