import Footer from "components/Footer";
import Header from "components/Header";
import Introduction from "components/Introduction";
import Masthead from "components/Masthead";
import SideNav from "components/SideNav";
import { Fragment } from "react";
import "styles/Layout.scss";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <Fragment>
      <div className="nsw-docs__header">
        <div className="nsw-docs__header-wrapper">
          <Masthead></Masthead>
          <Header></Header>
        </div>
      </div>
      <div className="nsw-docs__wrapper">
        <div className="nsw-docs__nav">
          <SideNav></SideNav>
        </div>
        <div className="nsw-docs__main">
          <Introduction></Introduction>
          <div className="nsw-docs__content">
            <div className="nsw-docs__container">{children}</div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
