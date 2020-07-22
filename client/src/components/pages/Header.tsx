import { Row, Col, Input, Container } from "reactstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export interface MainHeaderProps {}

const MainHeader: React.SFC<MainHeaderProps> = () => {
  return (
    <Container fluid>
      <Row>
        <Col style={{ backgroundColor: "#727D81", color: "#616A6D" }} xs={12}>
          <FontAwesomeIcon size="1x" className="" icon={faEllipsisH} />
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-center"
        style={{ textAlign: "center", backgroundColor: "#D5DEE2" }}
      >
        <Col className="p-5" xs={5}>
          <Row className="d-flex justify-content-center">
            <Col xs={12}>
              <h5 style={{ color: "#616A6D" }}>
                One nation, thousands of{" "}
                <span
                  className="p-2 m-2"
                  style={{ backgroundColor: "#616A6D", color: "white" }}
                >
                  Mobility
                </span>{" "}
                solutions
              </h5>
            </Col>

            <Col xs={7}>
              <span
                style={{ alignItems: "center" }}
                className="d-flex flex-row justify-content-center mt-3"
              >
                <Input className="mx-1" placeholder="Search by keyword"></Input>
                <span
                  className="p-1"
                  style={{ backgroundColor: "#616A6D", color: "white" }}
                >
                  <FontAwesomeIcon size="1x" className="" icon={faSearch} />
                </span>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainHeader;
