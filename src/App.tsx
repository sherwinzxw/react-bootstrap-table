import Layout from "Layout";
import "./App.scss";
import PaginatedTable from "scenes/PaginatedTable";
import { Route, Routes, useLocation } from "react-router-dom";
import { NoMatch } from "scenes/NoMatch";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<PaginatedTable />} />
        <Route path="/table/paginated" element={<PaginatedTable />} />
        <Route path="/table/flat" element={<PaginatedTable />} />
        <Route path="/table/sortable" element={<PaginatedTable />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </Layout>
  );
}

export default App;
