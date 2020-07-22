import { Row, Col, NavLink } from "reactstrap";
import React from "react";
import { NavLink as NLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export interface MainFooterProps {}

const MainFooter: React.SFC<MainFooterProps> = () => {
  return (
    <Row className="p-4 m-4 d-flex justify-content-around">
      <Col xs={2}>
        <img src="" alt="compony logo" />
        <span className="d-flex flex-row">
          <p className="mr-2">powered by </p>
          <FontAwesomeIcon size="1x" style={{ color: "green" }} icon={faBook} />
        </span>
      </Col>
      <Col xs={2}>
        <h6>FOOTER TITLE 1</h6>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
      </Col>
      <Col xs={2}>
        <h6>FOOTER TITLE 2</h6>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
      </Col>
      <Col xs={2}>
        <h6>FOOTER TITLE 3</h6>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
      </Col>
      <Col xs={2}>
        <h6>FOOTER TITLE 4</h6>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
        <NavLink className="m-0 p-0" tag={NLink} to="#">
          Link
        </NavLink>
      </Col>
    </Row>
  );
};

export default MainFooter;
