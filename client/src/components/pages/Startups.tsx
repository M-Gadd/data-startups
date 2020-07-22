import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import DefaultProfile from "../../assets/default.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Img1 from "../../assets/N26_Blog_OG_Image_Logo_Teal.jpg";
import Img2 from "../../assets/9I9F6Up7_400x400.png";
import Img3 from "../../assets/bdgk3evouwj0penv69nr.jpeg";

export interface StartupsProps {
  startupsToShow: any;
  isLoading: boolean;
}

const Startups: React.SFC<StartupsProps> = ({ startupsToShow, isLoading }) => {
  if (isLoading) {
    return (
      <Row>
        <Col xs={12}>
          <h3>Collecting your data...</h3>
        </Col>
      </Row>
    );
  }
  return (
    <Container fluid>
      <Row>
        {startupsToShow &&
          startupsToShow.map((one: any) => (
            <Col xs={12} lg={6}>
              <Card className="my-2 p-2">
                <Row>
                  <Col
                    className="d-flex justify-content-center align-items-center"
                    xs={2}
                  >
                    <img
                      width="100%"
                      src={
                        one.logo
                          ? one.logo
                          : one.title === "Get Your Guide"
                          ? Img2
                          : one.title === "N26"
                          ? Img1
                          : one.title === "Infarm"
                          ? Img3
                          : ""
                      }
                      alt="company logo"
                    />
                  </Col>
                  <Col xs={9}>
                    <h5>{one.title}</h5>
                    <p>{one.description}</p>
                  </Col>
                  <Col className="ml-0 pl-0" xs={1}>
                    <span style={{ float: "left" }} className=" d-flex flex-row">
                      <FontAwesomeIcon
                        onClick={() => window.open(one.anotherLink, "_blank")}
                        size="1x"
                        className="mr-1 links"
                        icon={faIdCard}
                      />
                      <FontAwesomeIcon
                        onClick={() => window.open(one.linkedIn, "_blank")}
                        size="1x"
                        className="links"
                        icon={faLinkedin}
                      />
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <h6 className="p-0 m-0">HQ</h6>
                    <p className="p-0 m-0">{one.headquarters}</p>
                  </Col>
                  <Col xs={2}>
                    <h6 className="p-0 m-0">Founded</h6>
                    <p className="p-0 m-0">{one.founded}</p>
                  </Col>
                  <Col xs={2}>
                    <h6 className="p-0 m-0">Fouders</h6>
                    {one.founders.map((founder: any) => (
                      <img
                        width="20px"
                        style={{ padding: "1px" }}
                        // className="p-0 m-0"
                        src={founder.image ? founder.image : DefaultProfile}
                        alt=""
                      />
                    ))}
                  </Col>
                  <Col xs={2}>
                    <h6 className="p-0 m-0">Funding</h6>
                    <p className="p-0 m-0">{`${one.funding.currency} ${one.funding.value}`}</p>
                  </Col>
                  <Col xs={2}>
                    <h6 className="p-0 m-0">Team</h6>
                    <p className="p-0 m-0">{one.teamSize}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
      </Row>

      <style>{`
              .links:hover,
              .links:focus {
                cursor: pointer;
              }
      
      `}</style>
    </Container>
  );
};

export default Startups;
