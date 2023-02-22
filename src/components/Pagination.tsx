/* eslint jsx-a11y/anchor-is-valid: "off" */
import { FunctionComponent, useEffect, useState } from "react";
import "styles/Pagination.scss";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const Pagination: FunctionComponent<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
}) => {
  let pageNumbersToDisplay = [];

  var [value, setValue] = useState(currentPage);

  useEffect(() => {
    setValue(currentPage);
  }, [currentPage]);

  if (currentPage > 1 && currentPage < pageCount && pageCount > 2) {
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;
    if (previousPage > 1) {
      pageNumbersToDisplay.push(previousPage);
    }
    pageNumbersToDisplay.push(currentPage);
    if (nextPage < pageCount) {
      pageNumbersToDisplay.push(nextPage);
    }
  } else if (currentPage === 1 && pageCount > 2) {
    if (currentPage + 1 < pageCount) {
      pageNumbersToDisplay.push(currentPage + 1);
    }
    if (currentPage + 2 < pageCount) {
      pageNumbersToDisplay.push(currentPage + 2);
    }
    if (currentPage + 3 < pageCount) {
      pageNumbersToDisplay.push(currentPage + 3);
    }
  } else if (currentPage === pageCount && pageCount > 2) {
    if (currentPage - 3 > 1) {
      pageNumbersToDisplay.push(currentPage - 3);
    }
    if (currentPage - 2 > 1) {
      pageNumbersToDisplay.push(currentPage - 2);
    }
    if (currentPage - 1 > 1) {
      pageNumbersToDisplay.push(currentPage - 1);
    }
  }

  if (pageNumbersToDisplay.length >= 2 && pageNumbersToDisplay.length <= 3) {
    if (pageNumbersToDisplay[0] > 2) {
      pageNumbersToDisplay.unshift("...");
    } else {
      pageNumbersToDisplay.push("...");
    }
    if (
      (pageNumbersToDisplay[pageNumbersToDisplay.length - 1] as number) <
      pageCount - 1
    ) {
      pageNumbersToDisplay.push("...");
    }
  }

  if (pageCount <= 1) {
    return null;
  }
  return (
    <div className="react-table-pagination-container">
      <div>
        <nav aria-label="Pagination" className="nsw-pagination">
          <ul>
            {currentPage > 1 && (
              <li>
                <a
                  className="nsw-icon-button"
                  onClick={() => onPageChange(currentPage - 1)}
                >
                  <span
                    className="material-icons nsw-material-icons"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_left
                  </span>
                  <span className="sr-only">Back</span>
                </a>
              </li>
            )}
            <li>
              <a
                className={currentPage === 1 ? "active" : ""}
                onClick={() => {
                  if (currentPage !== 1) {
                    onPageChange(1);
                  }
                }}
              >
                <span className="nsw-pagination__text">
                  <span className="sr-only">Page </span>1
                </span>
              </a>
            </li>
            {pageNumbersToDisplay.map((item, index) => {
              if (item === "...") {
                return (
                  <li key={`page-${item}-${index}`}>
                    <span className="custom__spreader">…</span>
                  </li>
                );
              } else {
                return (
                  <li key={`page-${item}-${index}`}>
                    <a
                      className={currentPage === item ? "active" : ""}
                      onClick={() => {
                        if (currentPage !== item) {
                          onPageChange(item as number);
                        }
                      }}
                    >
                      <span className="nsw-pagination__text">
                        <span className="sr-only">Page </span>
                        {item}
                      </span>
                    </a>
                  </li>
                );
              }
            })}
            {pageCount > 1 && (
              <li
                className={
                  currentPage === pageCount
                    ? "nsw-pagination__item nsw-pagination__item--is-active"
                    : "nsw-pagination__item"
                }
              >
                <a
                  className={currentPage === pageCount ? "active" : ""}
                  onClick={() => {
                    if (currentPage !== pageCount) {
                      onPageChange(pageCount);
                    }
                  }}
                >
                  <span className="nsw-pagination__text">
                    <span className="sr-only">Page </span>
                    {pageCount}
                  </span>
                </a>
              </li>
            )}
            {currentPage < pageCount && (
              <li>
                <a
                  className="nsw-icon-button"
                  onClick={() => onPageChange(currentPage + 1)}
                >
                  <span
                    className="material-icons nsw-material-icons"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_right
                  </span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {pageCount > 10 ? (
        <div className="custom-go2page-container">
          <input
            className="nsw-form__input"
            type="number"
            min={1}
            max={pageCount}
            value={value}
            onKeyUp={(e: any) => {
              if (parseInt(e.target.value) > pageCount) {
                setValue(pageCount);
              } else {
              }
            }}
            onInput={(e: any) => {
              setValue(e.target.value);
            }}
          ></input>
          <button
            className="nsw-button nsw-button--dark nsw-m-left-sm"
            onClick={(event: any) => {
              let value = parseInt(event.target.previousElementSibling.value);
              if (value !== pageCount) {
                onPageChange(value);
              } else {
                onPageChange(pageCount);
              }
            }}
          >
            Go to page
          </button>
        </div>
      ) : null}
    </div>
  );
};
