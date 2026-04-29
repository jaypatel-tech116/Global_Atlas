import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const left = Math.max(3, currentPage - 1);
      const right = Math.min(totalPages - 2, currentPage + 1);

      pages.push(1, 2);

      if (left > 3) pages.push("...");

      for (let i = left; i <= right; i++) pages.push(i);

      if (right < totalPages - 2) pages.push("...");

      pages.push(totalPages - 1, totalPages);
    }

    // remove duplicates
    return [...new Set(pages)];
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        <FaArrowLeftLong/>Prev
      </button>

      {pageNumbers.map((num, index) =>
        num === "..." ? (
          <span key={`dots-${index}`} className="dots">
            ...
          </span>
        ) : (
          <button
            key={`page-${num}`}
            onClick={() => onPageChange(num)}
            className={currentPage === num ? "active" : ""}
          >
            {num}
          </button>
        )
      )}

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next <FaArrowRightLong />
      </button>
    </div>
  );
};
