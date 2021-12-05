import React, { Children, ReactChild, ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ModalProvider } from "./features/modal/modalContext";

function AppProviders(props: { children: ReactChild }): ReactElement {
  return (
    <Provider store={store}>
      <ModalProvider>{Children.only(props.children)}</ModalProvider>
    </Provider>
  );
}

export default AppProviders;
