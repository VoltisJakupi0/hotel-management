import Card from "antd/es/card";
import { Col, Row } from "antd/es/grid";
import message from "antd/es/message";
import React, { ReactElement, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppDispatch } from "../../../../app/store";
import { setAuthUser } from "../../authSlice";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useGetLoginDataMutation } from "../../services/authApi";
import { removeAuthToken, setAuthToken } from "../../utils/localStorage";
import styles from "./LoginPage.module.css";

function error(content?: string): void {
  message.error(content);
}

function LoginPage(): ReactElement {
  const [getLoginData, { isLoading: isLoadingGetLoginData }] =
    useGetLoginDataMutation();
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    removeAuthToken();

    dispatch(setAuthUser(null));
  }, [dispatch]);

  const handleSubmit = useCallback(
    (username: string, password: string) => {
      getLoginData({ username, password })
        .unwrap()
        .then((authUser) => {
          setAuthToken(authUser);
          dispatch(setAuthUser(authUser));

          history.push("/hotel");
        })
        .catch((err) => error(err.error));
    },
    [dispatch, getLoginData, history]
  );

  return (
    <Row className={styles.loginRow} justify="center" align="middle">
      <Col>
        <Card className={styles.loginFormCard}>
          <LoginForm onSubmit={handleSubmit} loading={isLoadingGetLoginData} />
        </Card>
      </Col>
    </Row>
  );
}

export default LoginPage;
