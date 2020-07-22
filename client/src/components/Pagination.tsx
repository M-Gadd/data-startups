import React from "react";
import { PaginationItem, PaginationLink, Pagination } from "reactstrap";

export interface DataPaginationProps {
  startupsPerPage: number;
  totalStartups: number;
  paginate: any;
  previous: any;
  next: any;
  currentPage: number;
}

const DataPagination: React.SFC<DataPaginationProps> = ({
  startupsPerPage,
  totalStartups,
  paginate,
  previous,
  next,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStartups / startupsPerPage); i++) {
    pageNumbers.push(i);
  }

  let numbersToShow = [];

  if (currentPage < 3) {
    numbersToShow = pageNumbers.slice(0, 5);
  } else {
    numbersToShow = pageNumbers.slice(currentPage - 3, currentPage + 2);
  }
  return (
    <Pagination size="sm">
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink onClick={() => paginate(1)} first />
      </PaginationItem>
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink onClick={() => previous(currentPage)} previous />
      </PaginationItem>
      {numbersToShow.map((number) => (
        <PaginationItem>
          <PaginationLink onClick={() => paginate(number)}>{number}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={currentPage === pageNumbers[pageNumbers.length - 1]}>
        <PaginationLink onClick={() => next(currentPage)} next />
      </PaginationItem>
      <PaginationItem disabled={currentPage === pageNumbers[pageNumbers.length - 1]}>
        <PaginationLink onClick={() => paginate(pageNumbers.length)} last />
      </PaginationItem>
    </Pagination>
  );
};

export default DataPagination;
