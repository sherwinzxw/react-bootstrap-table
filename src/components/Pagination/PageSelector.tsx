import { Pagination } from "components/Pagination";

export function PageSelector(
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
