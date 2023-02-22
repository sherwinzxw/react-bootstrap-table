import { FunctionComponent } from "react";
import 'styles/PageSizeSelector.scss'

type PageSelectorProps = {
  pageNumber: number;
  pageSize: number;
  rowTotal: number;
  onPageSizeChange: (pageSize: number) => void;
};

export const renderPageSizeSelector: FunctionComponent<PageSelectorProps> = (
  props: PageSelectorProps
) => {
  const { pageNumber, pageSize, rowTotal, onPageSizeChange } = props;

  const pageRowStart = pageSize == -1 ? 1 : ((pageNumber - 1) * pageSize + 1)
  const pageRowEnd = pageSize == -1 ? (rowTotal) : (pageSize > rowTotal ? rowTotal : pageNumber * pageSize);

  return (
    <div className="react-table-page-size-selector-container">
      <span>{`Showing ${pageRowStart} to ${pageRowEnd} of ${rowTotal} rows `}</span>
      <select className="react-table-page-size-list"
        onChange={(e) => onPageSizeChange(parseInt(e.currentTarget.value))}
      >
        <option value="10">10</option>
        {rowTotal >= 25 ? <option value="25">25</option> : null}
        {rowTotal >= 100 ? <option value="100">100</option> : null}        
        <option value="-1">All</option>
      </select>
      <span>{` rows per page`}</span>
    </div>
  );
};
