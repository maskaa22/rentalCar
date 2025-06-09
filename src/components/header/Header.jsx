import c from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive ? `${c.link} ${c.active}` : c.link;
  };

  return (
    <header className={c.header}>
      <div className="container">
        <div className={c.innerContainer}>
          <p className={c.logo}>
            Rental<span>Car</span>
          </p>
          <nav className={c.nav}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
