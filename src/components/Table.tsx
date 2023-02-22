import { Fragment, useEffect, useState } from "react";
import "styles/Table.scss";
import {
  mergeObjectNestedPropertiesByMatchedPropertyKey,
  sliceObjectArrayToPages,
} from "utils/object";
import React from "react";
import { SortObjects } from "utils/sort";
import { renderTableHeader } from "./Table/TableHeader";
import { TableBody } from "./Table/TableBody";
import { PageSelector } from "./Pagination/PageSelector";
import { PageSizeSelector } from "./Pagination/PageSizeSelector";

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
    tableHeight = (null || undefined) ?? null,
    sortable = (null || undefined) ?? false,
    hasHeader = (null || undefined) ?? false,
    togglePageSize = (null || undefined) ?? false,
    toggleColumns = (null || undefined) ?? false,
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
  const [togglePagination, setTogglePagination] = useState<boolean>(
    tableSchema.togglePagination
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [schema, setSchema] = useState<any>(tableSchema);
  const [sortedColumnIndex, setSortedColumnIndex] = useState<any>();
  const [reverseSort, setSortOrder] = useState<boolean>(true);
  const [pageSize, setPageSize] = useState<number>(tableSchema.pageSize);
  const [columns, setColumns] = useState<Array<object>>(
    setVisibleColumns(tableSchema.columns)
  );
  const [data, setData] = useState<any>();

  // local variables

  let _totalPageNumber: number = togglePagination
    ? Math.ceil(tableData.length / pageSize)
    : 1;

  // component functions
  function main() {
    const _columns = setVisibleColumns(schema.columns);
    setColumns(_columns);
    setData(setTableData(tableData, tableSchema, pageSize));
    setLoading(false);
  }

  function setTableData(data: any, schema: any, pageSize: number) {
    let schemaValidatedData = [];
    let paginattedData = [];
    let output = [];

    function mapTableDataWithColumnSchema(data: any, columns: any) {
      return mergeObjectNestedPropertiesByMatchedPropertyKey(data, columns);
    }
    schemaValidatedData = mapTableDataWithColumnSchema(data, schema.columns);

    if (togglePagination) {
      paginattedData = sliceObjectArrayToPages(
        schemaValidatedData,
        _totalPageNumber,
        pageSize
      );
    } else {
      paginattedData = sliceObjectArrayToPages(
        schemaValidatedData,
        1,
        data.length
      );
    }
    return (output = paginattedData);
  }

  function setVisibleColumns(columnSchema: any) {
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

  const handleOnTableHeaderCellClick = React.useCallback(
    (event: any) => {
      const _columnName = event.currentTarget.getAttribute("data-column-name");
      const _columnIndex =
        event.currentTarget.getAttribute("data-column-index");
      const _tableId =
        event.currentTarget.parentNode.parentNode.parentNode.getAttribute("id");
      setSortedColumnIndex(_columnIndex);
      setSortOrder(!reverseSort);
      setData(
        // sort all pages
        setTableData(
          SortObjects(tableData, _columnName, reverseSort),
          tableSchema,
          pageSize
        )
        // sort current page
        //SortObjects(setTableData(tableData, tableSchema), _columnName, reverseSort)
      );
    },
    [reverseSort]
  );
  const handleOnPaginationChange = React.useCallback((event: any) => {
    setCurrentPageNumber(event);
    setData(setTableData(tableData, tableSchema, pageSize));
  }, []);
  const handleOnPageSizeSelectorChange = React.useCallback((event: any) => {
    console.log(event)
    setPageSize(event);
    setData(setTableData(tableData, tableSchema, event));
  }, []);

  function renderColumns() {}

  function renderTableFooter() {}

  function renderSearchBox() {}

  function handlePageChange() {}

  useEffect(() => {
    main();
  }, [tableData, tableSchema]);

  return (
    <Fragment>
      <div className="react-table-container table-responsive">
        {!loading ? (
          <table key={id} id={id} className={classes}>
            {renderTableHeader(
              data[currentPageNumber - 1],
              columns,
              hasHeader,
              tableSchema.sortable,
              handleOnTableHeaderCellClick,
              sortedColumnIndex,
              reverseSort
            )}
            {TableBody(data[currentPageNumber - 1], columns)}
          </table>
        ) : (
          <h1>loading...</h1>
        )}
        <div className="react-table-page-setting-container">
          {PageSizeSelector({
            pageNumber: currentPageNumber,
            pageSize: pageSize,
            rowTotal: tableData.length,
            onPageSizeChange: handleOnPageSizeSelectorChange 
          })}
          {PageSelector(
            _totalPageNumber,
            currentPageNumber,
            handleOnPaginationChange
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ReactTable;
