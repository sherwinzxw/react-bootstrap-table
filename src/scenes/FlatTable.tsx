import { Fragment } from "react";
import employeeData from "data/sample/employee/sampleEmployeeData.json";
import employeeSchemaMapping from "data/sample/employee/sampleEmployeeSchemaMapping.json";
import Table from "components/Table";

const FlatTable = () => {
  return (
    <Fragment>
      <h1>Flat Table</h1>
      <div className="content-container">
        <Table
          id="flat-table-example"
          tableSchema={employeeSchemaMapping}
          tableData={employeeData}
        ></Table>
      </div>
    </Fragment>
  );
};
export default FlatTable;
