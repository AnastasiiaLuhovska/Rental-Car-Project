import { Link, NavLink } from "react-router";
import type { FC } from "react";
import s from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={s.headerWrapper}>
      <div className="container">
        <div className={s.secWrapper}>
          <Link to="/" className={s.logo}>
            <svg width="100" height="16">
              <use href="/symbol-defs.svg#icon-RentalCar" />
            </svg>
          </Link>
          <div className={s.navWrapper}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
