import React, { PropsWithChildren, ReactElement } from "react";
import styles from "./NavigationMenu.module.css";
import Layout from "antd/es/layout";

function NavigationMenu({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  const { Content } = Layout;

  return (
    <div className={styles.layout}>
      <Content>{children}</Content>
    </div>
  );
}

export default NavigationMenu;
