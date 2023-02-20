import { Fragment, FunctionComponent, useState } from "react";
import "styles/Table.scss";

type TableProps = {
  key: string;
  id: string;
  classes?: string;
  tableSchema: any;
  tableData: any;
  pageSize: number;
  tableHeight?: number;
  sortable?: boolean;
  hideHeader?: boolean;
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


const ReactTable = (props : FunctionComponent) =>{

    



    return <div></div>;
}

export default ReactTable;
