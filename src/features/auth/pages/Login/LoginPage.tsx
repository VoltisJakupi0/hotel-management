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
import img from "../../../../assets/img/img.jpeg";
import { Image } from "antd";

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
    (email: string, passwd: string) => {
      getLoginData({ email, passwd })
        .unwrap()
        .then((authUser) => {
          setAuthToken(authUser);
          dispatch(setAuthUser(authUser));

          history.push("/rooms");
        })
        .catch((err) =>
          error(
            localStorage.getItem("language") == "sq"
              ? "Emaili ose fjalekalimi nuk eshte korrekt!"
              : "Invalid email or password!"
          )
        );
    },
    [dispatch, getLoginData, history]
  );

  return (
    <>
      <Row className={styles.loginRow} justify="start">
        <Col span={17}>
          <Image height={945} width={1200} src={img} />
        </Col>

        <Col className={styles.loginFormCard} span={5}>
          <Col>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                position: "absolute",
                bottom: 400,
                right: 350,
                width: 400,
                left: 270,
              }}
            >
              <button
                onClick={async () => {
                  localStorage.setItem("language", "sq");
                  window.location.reload();
                }}
                style={{
                  marginRight: 10,
                  height: 38,
                  width: 100,
                  border:
                    localStorage.getItem("language") == "sq"
                      ? "3 solid black"
                      : 0,
                }}
              >
                Sq
              </button>
              <button
                onClick={async () => {
                  await localStorage.setItem("language", "en");
                  window.location.reload();
                }}
                style={{
                  height: 38,
                  width: 100,
                  border:
                    localStorage.getItem("language") == "en"
                      ? "3 solid black"
                      : 0,
                }}
              >
                En
              </button>
            </div>
          </Col>

          <Card style={{ width: 400 }}>
            <LoginForm
              onSubmit={handleSubmit}
              loading={isLoadingGetLoginData}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default LoginPage;
