import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrnwLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation ">
        <Link className="logo-container" to="/">
          <div>
            <CrnwLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;