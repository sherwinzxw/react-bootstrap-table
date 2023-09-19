import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="nsw-header nsw-header--simple">
      <div className="nsw-header__container">
        <div className="nsw-header__inner">
          <div className="nsw-header__main">

            <div className="nsw-header__name">
              <div className="nsw-header__title">
                React Bootstrap Table{" "}
                <span className="nsw-docs__version">v1.0.1</span>
              </div>
            </div>
            <div className="nsw-header__menu">
              <button
                type="button"
                className="js-open-nav"
                aria-expanded="false"
                aria-controls="main-nav"
              >
                <span
                  className="material-icons nsw-material-icons"
                  focusable="false"
                  aria-hidden="true"
                >
                  menu
                </span>
                <span>
                  <span className="sr-only">Open</span> Menu
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
