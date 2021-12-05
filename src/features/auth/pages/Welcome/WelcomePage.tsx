import { Col, Row } from "antd/es/grid";
import React, { ReactElement } from "react";
import { Image } from "antd";
import img from "../../../../assets/img/img.jpeg";
import styles from "./WelcomePage.module.css";
import Button from "antd/es/button";
import { useHistory } from "react-router-dom";

function WelcomePage(): ReactElement {
  const history = useHistory();

  return (
    <div className={styles.wrapperDiv}>
      <Row>
        <Col span={9}>
          <div className={styles.welcomeDiv}>
            <h1>Miresevini ne aplikacionin per menaxhim te hotileriese</h1>

            <h2>Zgjedhini opsionet me poshte:</h2>

            <Row style={{ marginTop: 100 }}>
              <Button
                onClick={() => history.push("auth/login")}
                style={{ marginRight: 10 }}
              >
                Kyqu
              </Button>
              <Button onClick={() => history.push("auth/register")}>
                Regjistrohu
              </Button>
            </Row>
          </div>
        </Col>
        <Col span={8}>
          <Image height={945} width={1200} src={img} />
        </Col>
      </Row>
    </div>
  );
}

export default WelcomePage;
