import "styles/Toolbar.scss";
const Toolbar = () => {
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
          >
            <span className="material-symbols-outlined">expand_content</span>
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
              <a className="dropdown-item " href="#" data-type="json">
                JSON
              </a>
              <a className="dropdown-item " href="#" data-type="xml">
                XML
              </a>
              <a className="dropdown-item " href="#" data-type="csv">
                CSV
              </a>
              <a className="dropdown-item " href="#" data-type="txt">
                TXT
              </a>
              <a className="dropdown-item " href="#" data-type="sql">
                SQL
              </a>
              <a className="dropdown-item " href="#" data-type="excel">
                MS-Excel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
