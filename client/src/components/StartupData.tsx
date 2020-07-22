import React, { useState, useCallback } from "react";
import { Row, Col, Input } from "reactstrap";
import { useStartups } from "../hooks/useStartups";
import Startups from "./pages/Startups";
import DataPagination from "./Pagination";

export interface StartupDataProps {}

const StartupData: React.SFC<StartupDataProps> = () => {
  const { startups, isLoading } = useStartups();
  const [currentPage, setCurrentPage] = useState(1);
  const [startupsPerPage, setStartupsPerPage] = useState(20);

  console.log(startups);

  // Get current startups
  const indexOfLastStartup = currentPage * startupsPerPage;
  const indexOfFirstStartup = indexOfLastStartup - startupsPerPage;
  const currentStartups = startups.slice(indexOfFirstStartup, indexOfLastStartup);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const previous = (pageNumber: number) => setCurrentPage(pageNumber - 1);
  const next = (pageNumber: number) => setCurrentPage(pageNumber + 1);

  return (
    <>
      <Row className="mx-4 pt-4">
        <Col xs={6}>
          <p className="mb-0">{startups.length} startups</p>
        </Col>
        <Col xs={6}>
          <span className="mr-0 pr-0" style={{ float: "right", paddingLeft: "60%" }}>
            Show
            <input
              className="mx-2"
              type="number"
              style={{ width: "20%" }}
              value={startupsPerPage}
              onChange={(e) => {
                if (Number(e.target.value) === 0) {
                  setStartupsPerPage(5);
                  setCurrentPage(1);
                } else {
                  setStartupsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }
              }}
            />
            results per page
          </span>
        </Col>
      </Row>
      <span>
        <div>
          {currentStartups && (
            <Startups startupsToShow={currentStartups} isLoading={isLoading} />
          )}
          <Row className="d-flex justify-content-end">
            <Col xs={7}>
              <Row>
                <Col>
                  <DataPagination
                    currentPage={currentPage}
                    startupsPerPage={startupsPerPage}
                    totalStartups={startups.length}
                    paginate={paginate}
                    previous={previous}
                    next={next}
                  />
                </Col>
                <Col>
                  <span className="mr-0 pr-0">
                    Show
                    <input
                      className="mx-2"
                      type="number"
                      style={{ width: "20%" }}
                      value={startupsPerPage}
                      onChange={(e) => {
                        if (Number(e.target.value) === 0) {
                          setStartupsPerPage(5);
                          setCurrentPage(1);
                        } else {
                          setStartupsPerPage(Number(e.target.value));
                          setCurrentPage(1);
                        }
                      }}
                    />
                    results per page
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </span>
    </>
  );
};

export default StartupData;
