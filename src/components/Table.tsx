import { Fragment, FunctionComponent, useEffect, useState } from "react";
import "styles/Table.scss";
import { Pagination } from "./Pagination";
import { CellClassnameRenderer } from "utils/renderer";
import { mergeObjectNestedPropertiesByMatchedPropertyKey } from "utils/object";
import React from "react";
import { SortTable } from "utils/sort";

type TableProps = {
  id: string;
  classes?: string;
  tableSchema: any;
  tableData: any;
  pageSize?: number;
  tableHeight?: number;
  sortable?: boolean;
  hasHeader?: boolean;
  togglePageSize?: number;
  toggleColumns?: boolean;
  togglePagination?: boolean;
  toggleSearch?: boolean;
  toggleExport?: boolean;
  toggleSingleSelect?: boolean;
  toggleMultipleSelect?: boolean;
  toggleFooter?: boolean;
};

type tableSchema = {
  key: string;
  name: string;
  index: number;
  formatters?: any;
  renderers?: any;
  sortable?: boolean;
  hide?: boolean;
};

const ReactTable = (props: TableProps) => {
  const {
    id,
    classes = (null || undefined) ?? "react-bootstrap-table table-primary",
    tableSchema,
    tableData,
    pageSize = (null || undefined) ?? 10,
    tableHeight = (null || undefined) ?? null,
    sortable = (null || undefined) ?? false,
    hasHeader = (null || undefined) ?? false,
    togglePageSize = (null || undefined) ?? false,
    toggleColumns = (null || undefined) ?? false,
    togglePagination = (null || undefined) ?? false,
    toggleSearch = (null || undefined) ?? false,
    toggleExport = (null || undefined) ?? false,
    toggleSingleSelect = (null || undefined) ?? false,
    toggleMultipleSelect = (null || undefined) ?? false,
    toggleFooter = (null || undefined) ?? false,
  } = props;

  // states
  const [currentSortColumn, setCurrentSortColumn] = useState<string | null>(
    null
  );

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [columns, setColumns] = useState<Array<object>>([]);
  const [sortedFieldIndex, setSortedFieldIndex] = useState<any>();
  const [reverseSort, setSortOrder] = useState<Boolean>(true);
  const [visibleColumns, setVisibleColumns] = useState<Array<object>>(
    getVisibleColumns(tableSchema.columns)
  );
  const [data, setData] = useState<any>();

  // local variables

  let _totalPageNumber: number = togglePagination
    ? Math.ceil(tableData.length / pageSize)
    : 0;

  // component functions
  function main() {
    const _visibleColumns = getVisibleColumns(tableSchema.columns);
    const _data = mapTableDataWithColumnSchema(tableData, tableSchema.columns);
    setVisibleColumns(_visibleColumns);
    setData(_data);
    setLoading(false);
  }

  function mapTableDataWithColumnSchema(data: any, columns: any) {
    return mergeObjectNestedPropertiesByMatchedPropertyKey(data, columns);
  }

  function getVisibleColumns(columnSchema: any) {
    if (columnSchema) {
      const result = Object.entries(columnSchema)
        .filter((c: any) => c[1].hide !== true)
        .map(([fieldKey, fieldValue]: any) => {
          return fieldKey;
        });
      return result;
    } else {
      return [];
    }
  }

  const handleOnTableHeaderCellClick = React.useCallback((event: any) => {
    const _columnName = event.currentTarget.getAttribute('data-column-name')
    const _columnIndex = event.currentTarget.getAttribute('data-column-index')
    const _tableId = event.currentTarget.parentNode.parentNode.parentNode.getAttribute('id')
    setSortedFieldIndex(_columnIndex);
    setSortOrder(!reverseSort);
    SortTable(
      id,
      _columnIndex,
      reverseSort
    );
  },
  [reverseSort]);

  function renderTableHeader(data?: any, hasHeader?: boolean) {
    function renderHeaderCell(data: any) {
      if (data) {
        return Object.values(data[1]).map((column: any, index: number) => {
          if (visibleColumns.includes(column.key)) {
            return (
              <CellClassnameRenderer
                key={index}
                classnames={`${column.hide == true ? "hide" : ""}${column.sort == true ? "sortable" : ""}`}
                columnName={column.key}
                columnIndex={index}
                renderers={column.classnameRenderers}
                cellType={"th"}
                onClickHandler={handleOnTableHeaderCellClick}
                index={index}
                sortedFieldIndex={sortedFieldIndex}
                reverseSort={reverseSort}
                sortable={column.sort}
              >
                <span>{column.name}</span>
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

  function renderTableBody(data: any) {
    if (data === (null || undefined || [])) {
      return "no data";
    } else {
      return (
        <tbody>
          {data.map((row: any, rowIndex: number) => {
            return (
              <tr key={rowIndex}>
                {Object.entries(row).map(
                  (
                    [cellKey, cellValueSchema]: [key: any, value: any],
                    cellIndex: number
                  ) => {
                    if (visibleColumns.includes(cellKey)) {
                      return (
                        <CellClassnameRenderer
                          key={cellIndex}
                          renderers={cellValueSchema.classnameRenderers}
                          classnames={``}
                          cellType={"td"}
                        >
                          {cellValueSchema.value}
                        </CellClassnameRenderer>
                      );
                    } else {
                      return;
                    }
                  }
                )}
              </tr>
            );
          })}
        </tbody>
      );
    }
  }

  function renderColumns() {}

  function renderTableFooter() {}

  function renderTablePagination() {}

  function renderSearchBox() {}

  // function renderHeaderSortIcon(index: Number, sortable: boolean) {
    
  //   if (sortable) {
  //     if (index === sortedFieldIndex) {
  //       if (!reverseSort) {
  //         return <span className="custom-icon sort-up"></span>;
  //       } else {
  //         return <span className="custom-icon sort-down"></span>;
  //       }
  //     } else {
  //       return <span className="custom-icon sort"></span>;
  //     }
  //   }
  // }

  function handlePageChange() {}

  function renderTableToolBar(
    pageCount: number,
    currentPageNumber: number,
    onPageChangeHandler: any
  ) {
    return (
      <Pagination
        pageCount={pageCount}
        currentPage={currentPageNumber}
        onPageChange={onPageChangeHandler}
      ></Pagination>
    );
  }
  useEffect(() => {
    main();
  }, [tableData, tableSchema]);

  return (
    <div className="react-table-container table-responsive">
      {!loading ? (
        <table key={id} id={id} className={classes}>
          {renderTableHeader(data, hasHeader)}
          {renderTableBody(data)}
        </table>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default ReactTable;
