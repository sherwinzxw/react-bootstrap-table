import { Pagination } from "components/Pagination";

export function renderTablePagination(
  pageCount: number,
  currentPage: number,
  onPageChange: any
) {
  return (
    <Pagination
      pageCount={pageCount}
      currentPage={currentPage}
      onPageChange={onPageChange}
    ></Pagination>
  );
}
