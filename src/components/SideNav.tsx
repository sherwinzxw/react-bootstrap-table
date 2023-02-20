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
            <a
              role="button"
              aria-expanded="false"
              aria-controls="sub-nav-about"
              className="current-section"
            >
              <span>About</span>
              <span
                className="material-icons nsw-material-icons"
                focusable="false"
                aria-hidden="true"
              >
                keyboard_arrow_right
              </span>
            </a>

            <div
              className="nsw-main-nav__sub-nav current-section"
              id="sub-nav-about"
              role="region"
              aria-label="Design Submenu"
            >
              <div className="nsw-main-nav__header">
                <button
                  className="nsw-icon-button nsw-icon-button--flex js-close-sub-nav"
                  type="button"
                  aria-expanded="true"
                  aria-controls="sub-nav-about"
                >
                  <span
                    className="material-icons nsw-material-icons"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_left
                  </span>
                  <span>
                    Back<span className="sr-only"> to Main Menu</span>
                  </span>
                </button>

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

              <ul className="nsw-main-nav__sub-list">
                <li>
                  <a
                    href="/nsw-design-system/docs/content/about/what-is-design-system.html"
                    className="current"
                  >
                    <span>What is Design System</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/about/supporting-different-roles.html">
                    <span>Supporting different roles</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/about/our-ecosystem.html">
                    <span>Our ecosystem</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/about/whats-happening.html">
                    <span>What's happening</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              role="button"
              aria-expanded="false"
              aria-controls="sub-nav-design"
              className=""
            >
              <span>Design</span>
              <span
                className="material-icons nsw-material-icons"
                focusable="false"
                aria-hidden="true"
              >
                keyboard_arrow_right
              </span>
            </a>

            <div
              className="nsw-main-nav__sub-nav"
              id="sub-nav-design"
              role="region"
              aria-label="Design Submenu"
            >
              <div className="nsw-main-nav__header">
                <button
                  className="nsw-icon-button nsw-icon-button--flex js-close-sub-nav"
                  type="button"
                  aria-expanded="true"
                  aria-controls="sub-nav-design"
                >
                  <span
                    className="material-icons nsw-material-icons"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_left
                  </span>
                  <span>
                    Back<span className="sr-only"> to Main Menu</span>
                  </span>
                </button>

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

              <ul className="nsw-main-nav__sub-list">
                <li>
                  <a href="/nsw-design-system/docs/content/design/getting-started.html">
                    <span>Getting Started</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/design/figma-ui-kit.html">
                    <span>Figma UI Kit</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/design/extending.html">
                    <span>Extending</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/design/theming.html">
                    <span>Theming</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/design/guides.html">
                    <span>Guides</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a
              role="button"
              aria-expanded="false"
              aria-controls="sub-nav-develop"
            >
              <span>Develop</span>
              <span
                className="material-icons nsw-material-icons"
                focusable="false"
                aria-hidden="true"
              >
                keyboard_arrow_right
              </span>
            </a>

            <div
              className="nsw-main-nav__sub-nav"
              id="sub-nav-develop"
              role="region"
              aria-label="Develop Submenu"
            >
              <div className="nsw-main-nav__header">
                <button
                  className="nsw-icon-button nsw-icon-button--flex js-close-sub-nav"
                  type="button"
                  aria-expanded="true"
                  aria-controls="sub-nav-develop"
                >
                  <span
                    className="material-icons nsw-material-icons"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_left
                  </span>
                  <span>
                    Back<span className="sr-only"> to Main Menu</span>
                  </span>
                </button>

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

              <ul className="nsw-main-nav__sub-list">
                <li>
                  <a href="/nsw-design-system/docs/content/develop/getting-started.html">
                    <span>Getting Started</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/develop/theming.html">
                    <span>Theming</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/develop/helpers.html">
                    <span>Utility Classes</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a role="button" aria-expanded="false" aria-controls="sub-nav-core">
              <span>Core styles</span>
              <span
                className="material-icons nsw-material-icons"
                focusable="false"
                aria-hidden="true"
              >
                keyboard_arrow_right
              </span>
            </a>

            <div
              className="nsw-main-nav__sub-nav"
              id="sub-nav-core"
              role="region"
              aria-label="Core styles Submenu"
            >
              <div className="nsw-main-nav__header">
                <button
                  className="nsw-icon-button nsw-icon-button--flex js-close-sub-nav"
                  type="button"
                  aria-expanded="true"
                  aria-controls="sub-nav-core"
                >
                  <span
                    className="material-icons nsw-material-icons"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_left
                  </span>
                  <span>
                    Back<span className="sr-only"> to Main Menu</span>
                  </span>
                </button>

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

              <ul className="nsw-main-nav__sub-list">
                <li>
                  <a href="/nsw-design-system/core/logo/index.html">
                    <span>Logo</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/colour/index.html">
                    <span>Colour</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/typography/index.html">
                    <span>Typography</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/iconography/index.html">
                    <span>Iconography</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/pictograms/index.html">
                    <span>Pictograms</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/grid/index.html">
                    <span>Grid</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/layout/index.html">
                    <span>Layout</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/section/index.html">
                    <span>Section</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/spacing/index.html">
                    <span>Spacing</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/core/graphic-elements/index.html">
                    <span>Graphic elements</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a
              role="button"
              aria-expanded="false"
              aria-controls="sub-nav-components"
            >
              <span>Components</span>
              <span
                className="material-icons nsw-material-icons"
                focusable="false"
                aria-hidden="true"
              >
                keyboard_arrow_right
              </span>
            </a>

            <div
              className="nsw-main-nav__sub-nav"
              id="sub-nav-components"
              role="region"
              aria-label="Components Submenu"
            >
              <div className="nsw-main-nav__header">
                <button
                  className="nsw-icon-button nsw-icon-button--flex js-close-sub-nav"
                  type="button"
                  aria-expanded="true"
                  aria-controls="sub-nav-components"
                >
                  <span
                    className="material-icons nsw-material-icons"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_left
                  </span>
                  <span>
                    Back<span className="sr-only"> to Main Menu</span>
                  </span>
                </button>

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

              <ul className="nsw-main-nav__sub-list">
                <li>
                  <a href="/nsw-design-system/components/accordion/index.html">
                    <span>Accordion</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/breadcrumbs/index.html">
                    <span>Breadcrumbs</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/button/index.html">
                    <span>Buttons</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/callout/index.html">
                    <span>Callout</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/card/index.html">
                    <span>Cards</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/content-block/index.html">
                    <span>Content blocks</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/dialog/index.html">
                    <span>Dialog</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/filters/index.html">
                    <span>Filters</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/footer/index.html">
                    <span>Footer</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/form/index.html">
                    <span>Forms</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/global-alert/index.html">
                    <span>Global alert</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/header/index.html">
                    <span>Header</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/hero-banner/index.html">
                    <span>Hero banner</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/hero-search/index.html">
                    <span>Hero search</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/in-page-alert/index.html">
                    <span>In-page alert</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/in-page-nav/index.html">
                    <span>In-page navigation</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/link-list/index.html">
                    <span>Link list</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/list-item/index.html">
                    <span>List items</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/main-nav/index.html">
                    <span>Main navigation</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/masthead/index.html">
                    <span>Masthead</span>
                    <span className="nsw-brand">🔹</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/media/index.html">
                    <span>Media</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/pagination/index.html">
                    <span>Pagination</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/progress-indicator/index.html">
                    <span>Progress Indicator</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/results-bar/index.html">
                    <span>Results bar</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/side-nav/index.html">
                    <span>Side navigation</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/steps/index.html">
                    <span>Steps</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/table/index.html">
                    <span>Tables</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/tabs/index.html">
                    <span>Tabs</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/components/tag/index.html">
                    <span>Tags</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a
              role="button"
              aria-expanded="false"
              aria-controls="sub-nav-methods"
              className=""
            >
              <span>Methods</span>
              <span
                className="material-icons nsw-material-icons"
                focusable="false"
                aria-hidden="true"
              >
                keyboard_arrow_right
              </span>
            </a>

            <div
              className="nsw-main-nav__sub-nav"
              id="sub-nav-methods"
              role="region"
              aria-label="Methods Submenu"
            >
              <div className="nsw-main-nav__header">
                <button
                  className="nsw-icon-button nsw-icon-button--flex js-close-sub-nav"
                  type="button"
                  aria-expanded="true"
                  aria-controls="sub-nav-methods"
                >
                  <span
                    className="material-icons nsw-material-icons"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_left
                  </span>
                  <span>
                    Back<span className="sr-only"> to Main Menu</span>
                  </span>
                </button>

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

              <ul className="nsw-main-nav__sub-list">
                <li>
                  <a href="/nsw-design-system/docs/content/methods/search.html">
                    <span>Search &amp; Filters</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/methods/maps.html">
                    <span>Maps</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/methods/data-visualisation.html">
                    <span>Data visualisation</span>
                  </a>
                </li>
                <li>
                  <a href="/nsw-design-system/docs/content/methods/you-are-here.html">
                    <span>You are here</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="/nsw-design-system/templates/index.html">
              <span>Templates</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
