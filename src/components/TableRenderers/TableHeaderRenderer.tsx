import { CellClassnameRenderer } from "utils/renderer";

export function renderTableHeader(
  data: any,
  visibleColumns: any,
  hasHeader: boolean,
  sortableTable: boolean,
  headerClickHandler: any,
  sortedFieldIndex: any,
  reverseSort: any
) {
  function renderHeaderCell(data: any) {
    if (data) {
      return Object.values(data[1]).map((column: any, index: number) => {
        if (visibleColumns.includes(column.key)) {
          return (
            <CellClassnameRenderer
              key={index}
              classnames={`${column.hide == true ? "hide" : ""}${
                column.sort == true ? "sortable" : ""
              }`}
              columnName={column.key}
              columnIndex={index}
              renderers={column.classnameRenderers}
              cellType={"th"}
              onClickHandler={sortableTable ? headerClickHandler : null}
            >
              <span>{column.name}</span>
              {sortableTable? renderHeaderSortIcon(
                index,
                column.sort,
                sortedFieldIndex,
                reverseSort
              ) : null}
            </CellClassnameRenderer>
          );
        } else {
          return;
        }
      });
    } else {
      return;
    }
  }

  if (hasHeader === (null || undefined || false)) {
    return (
      <thead>
        <tr>{renderHeaderCell(data)}</tr>
      </thead>
    );
  } else {
    return;
  }
}

export function renderHeaderSortIcon(
  index: Number,
  sortable: boolean,
  sortedFieldIndex: any,
  reverseSort: boolean
) {
  if (sortable) {
    if (index.toString() === sortedFieldIndex) {
      if (!reverseSort) {
        return <span className="custom-icon sort-up"></span>;
      } else {
        return <span className="custom-icon sort-down"></span>;
      }
    } else {
      return <span className="custom-icon sort"></span>;
    }
  }
}
