import "styles/Toolbar.scss";
import { toggleElementToFullScreen } from "utils/misc/fullScreen";
import { exportToCsv, exportToJson, exportToXml } from "utils/table/export";

const Toolbar = (props: any) => {
  const { targetTableId, targetTableContainerId } = props;

  return (
    <div className="react-table-toolbar-container">
      <div className="react-table-toolbar-button-group-container">
        <div className="btn-group">
          <button
            className="btn btn-secondary"
            type="button"
            name="paginationSwitch"
            aria-label="Hide/Show pagination"
            title="Hide/Show pagination"
          >
            <span className="material-symbols-outlined">
              bottom_panel_close
            </span>
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            name="refresh"
            aria-label="Refresh"
            title="Refresh"
          >
            <span className="material-symbols-outlined">refresh</span>
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            name="fullscreen"
            aria-label="Fullscreen"
            title="Fullscreen"
            onClick={(e: any) => {
              const iconElement = e.currentTarget.children[0];
              if (toggleElementToFullScreen(targetTableContainerId)) {
                iconElement.innerText = "close_fullscreen";
                iconElement.setAttribute("title", "Enter full screen mode");
              } else {
                iconElement.innerText = "open_in_full";
                iconElement.setAttribute("title", "Exit full screen mode");
              }
            }}
          >
            <span
              className="material-symbols-outlined"
              title="Enter full screen mode"
            >
              open_in_full
            </span>
          </button>
          <div className="keep-open btn-group" title="Columns">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-label="Columns"
              title="Columns"
              aria-expanded="false"
            >
              <span className="material-symbols-outlined">list</span>

              <span className="caret"></span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <label className="dropdown-item dropdown-item-marker">
                <input type="checkbox" className="toggle-all" />{" "}
                <span>Toggle all</span>
              </label>
              <div className="dropdown-divider"></div>
              <label className="dropdown-item dropdown-item-marker">
                <input type="checkbox" data-field="id" value="1" />{" "}
                <span>Item ID</span>
              </label>
              <label className="dropdown-item dropdown-item-marker">
                <input type="checkbox" data-field="name" value="2" />{" "}
                <span>Item Name</span>
              </label>
              <label className="dropdown-item dropdown-item-marker">
                <input type="checkbox" data-field="price" value="3" />{" "}
                <span>Item Price</span>
              </label>
              <label className="dropdown-item dropdown-item-marker">
                <input type="checkbox" data-field="operate" value="4" />{" "}
                <span>Item Operate</span>
              </label>
            </div>
          </div>
          <div className="export btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              aria-label="Export data"
              data-bs-toggle="dropdown"
              type="button"
              title="Export data"
              aria-expanded="false"
            >
              <span className="material-symbols-outlined">download</span>

              <span className="caret"></span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item"
                href="#"
                data-type="json"
                onClick={() => {
                  exportToJson(targetTableId);
                }}>
                JSON
              </a>
              <a
                className="dropdown-item "
                href="#"
                data-type="xml"
                onClick={() => {
                  exportToXml(targetTableId);
                }}
              >
                XML
              </a>
              <a
                className="dropdown-item "
                href="#"
                data-type="csv"
                onClick={() => {
                  exportToCsv(targetTableId, "csv");
                }}
              >
                CSV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
