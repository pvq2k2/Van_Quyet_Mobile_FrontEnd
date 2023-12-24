import React, { useEffect, useMemo, useState } from "react";
import {
  IoReturnDownBackOutline,
  IoReturnDownForwardOutline,
} from "react-icons/io5";

const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const handlePageChange = (newPage) => {
    if (pagination.pageNumber != newPage) {
      if (onPageChange) {
        onPageChange(newPage);
      }
    }
  };
  const numberOfPages = () => {
    const numberOfPage = [];
    for (let i = 1; i <= pagination.totalPage; i++) {
      numberOfPage.push(i);
    }
    return numberOfPage;
  };

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (pagination.pageNumber >= 1 && pagination.pageNumber <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (pagination.pageNumber === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (
      pagination.pageNumber > 4 &&
      pagination.pageNumber < numberOfPages.length - 2
    ) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfPages.slice(
        pagination.pageNumber - 2,
        pagination.pageNumber,
      ); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(
        pagination.pageNumber,
        pagination.pageNumber + 1,
      ); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (pagination.pageNumber > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (pagination.pageNumber === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      handlePageChange(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (pagination.pageNumber === dotsRight) {
      handlePageChange(arrOfCurrButtons[3] + 2);
    } else if (pagination.pageNumber === dotsLeft) {
      handlePageChange(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
  }, [pagination.pageNumber, pagination.totalPage]);

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-7 md:flex-nowrap">
      <button
        disabled={pagination.pageNumber <= 1}
        onClick={() => handlePageChange(pagination.pageNumber - 1)}
        className="order-2 flex gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 shadow-xl transition-colors duration-200 hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:disabled:bg-gray-800 dark:disabled:text-gray-500 md:order-none"
      >
        <IoReturnDownBackOutline className="text-2xl" />
        <span>Quay lại</span>
      </button>
      <div className="flex w-full items-center justify-center gap-x-3 md:w-fit">
        {arrOfCurrButtons.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`rounded-md px-2 py-1 text-sm ${
              page == pagination.pageNumber
                ? "bg-blue-100/60 text-blue-500 dark:bg-gray-800"
                : "text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        disabled={pagination.pageNumber >= pagination.totalPage}
        onClick={() => handlePageChange(pagination.pageNumber + 1)}
        className="order-3 flex gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 shadow-xl transition-colors duration-200 hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:disabled:bg-gray-800 dark:disabled:text-gray-500 md:order-none"
      >
        <span>Tiếp theo</span>
        <IoReturnDownForwardOutline className="text-2xl" />
      </button>
    </div>
  );
};

export default Pagination;
