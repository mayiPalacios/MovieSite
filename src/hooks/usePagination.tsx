import { useState } from "react";

const usePagination = (
  initialPage: number,
  initialElementsPerPage: number,
  totalElements: number
) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [elementsPerPage] = useState(initialElementsPerPage);

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirtsElement = indexOfLastElement - elementsPerPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const totalPages = Math.ceil(totalElements / elementsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return {
    currentPage,
    setCurrentPage,
    elementsPerPage,
    indexOfLastElement,
    indexOfFirtsElement,
    handleNextPage,
    handlePreviousPage,
    totalPages,
    pageNumbers,
  };
};

export default usePagination;
