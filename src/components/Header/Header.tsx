import { Link, NavLink } from "react-router";
import type { FC } from "react";
import s from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={s.headerWrapper}>
      <Link to="/" className={s.logo}>
        Rental<span className={s.span}>Car</span>
      </Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </div>
  );
};

export default Header;
