import { Link, NavLink } from "react-router";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <div>
      <Link to="/">RentalCar</Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </div>
  );
};

export default Header;
