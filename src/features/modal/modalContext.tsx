import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import { ModalAction, ModalActions, ModalState, ModalTypes } from "./types";

export type ModalDispatch = (action: ModalAction) => void;

const ModalStateContext = createContext<ModalState | undefined>(undefined);
const ModalDispatchContext = createContext<ModalDispatch | undefined>(
  undefined
);

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case ModalActions.showModal: {
      const { modalProps, ...rest } = action.payload;

      return {
        ...state,
        modalProps: modalProps ?? {},
        ...rest,
      };
    }
    case ModalActions.hideModal: {
      return {
        ...state,
        type: ModalTypes.Empty,
        modalProps: {},
        props: {},
        className: "",
      };
    }
    default: {
      return state;
    }
  }
}

const initialState: ModalState = {
  type: "",
  className: "",
  modalProps: {},
  props: {},
};

function ModalProvider({ children }: PropsWithChildren<unknown>): ReactElement {
  const [state, dispatch] = useReducer<
    (state: ModalState, dispatch: ModalAction) => ModalState
  >(modalReducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

function useModalState(): ModalState {
  const context = useContext<ModalState | undefined>(ModalStateContext);

  if (context === undefined) {
    throw new Error("useModalState must be used within a ModalProvider");
  }

  return context;
}

function useModalDispatch(): ModalDispatch {
  const context = useContext(ModalDispatchContext);

  if (context === undefined) {
    throw new Error("useModalDispatch must be used within a ModalProvider");
  }

  return context;
}

function useModal(): any {
  return [useModalState(), useModalDispatch()];
}

export { ModalProvider, useModal };
