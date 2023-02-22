import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="nsw-docs__nav-wrapper">
      <nav
        className="nsw-main-nav js-mega-menu"
        id="main-nav"
        aria-label="Main menu"
      >
        <div className="nsw-main-nav__header">
          <div className="nsw-main-nav__title">Menu</div>
          <button
            className="nsw-icon-button js-close-nav"
            type="button"
            aria-expanded="true"
          >
            <span
              className="material-icons nsw-material-icons"
              focusable="false"
              aria-hidden="true"
            >
              close
            </span>
            <span className="sr-only">Close Menu</span>
          </button>
        </div>
        <ul className="nsw-main-nav__list">
          <li>
            <Link to={`/`}>{`Paginated Table`}</Link>
          </li>
          <li>
            <Link to={`/table/flat`}>{`Flat Table`}</Link>
          </li>
          <li>
            <Link to={`/table/sortable`}>{`Sortable Headers`}</Link>
          </li>
          <li>
            <Link to={`/table/toggle-page-size`}>{`Page Size Selection`}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
