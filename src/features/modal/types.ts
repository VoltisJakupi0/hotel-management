import { ModalProps } from "antd/es/modal";

export enum ModalTypes {
  CreateUserModal = "CreateUserModal",
  CreateCategoryModal = "CreateCategoryModal",
  CreateStatusModal = "CreateStatusModal",
  CreateRoomModal = "CreateRoomModal",
  ReserveRoomModal = "ReserveRoomModal",
  ShowInfoModal = "ShowInfoModal",
  Empty = "",
}

export interface ModalState {
  type: ModalTypes | "";
  className?: string;
  modalProps?: ModalProps;
  props: any;
}

export interface ContextModalProps {
  timelineId?: number;
}

export interface ModalPayloadTypes {
  [ModalTypes.CreateUserModal]: any;
  [ModalTypes.CreateCategoryModal]: any;
  [ModalTypes.CreateStatusModal]: any;
  [ModalTypes.CreateRoomModal]: any;
  [ModalTypes.ReserveRoomModal]: any;
  [ModalTypes.ShowInfoModal]: any;
  [ModalTypes.Empty]: void;
}

export interface CommonModalProps {
  onClose?: () => void;
}

export interface ShowModalPayload {
  type: ModalTypes;
  props?: ModalPayloadTypes[ModalTypes];
  modalProps?: ModalProps;
  className?: string;
}

export enum ModalActions {
  showModal = "SHOW_MODAL",
  hideModal = "HIDE_MODAL",
}

export type ModalAction =
  | { type: ModalActions.showModal; payload: ShowModalPayload }
  | { type: ModalActions.hideModal; payload?: unknown };
