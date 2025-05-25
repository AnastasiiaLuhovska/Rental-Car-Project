import type { FC } from "react";
import { Link } from "react-router";
import s from "./HomePage.module.css";

const HomePage: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={s.firstWrapper}>
          <div className={s.textWrapper}>
            <p className={s.header}>Find your perfect rental car</p>
            <p className={s.p}>
              Reliable and budget-friendly rentals for any journey
            </p>
            <Link to="/catalog" className={s.button}>
              View Catalog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
