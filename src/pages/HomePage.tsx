import type { FC } from "react";
import { Link } from "react-router";

const HomePage: FC = () => {
  return (
    <div>
      <p>Find your perfect rental car</p>
      <p>Reliable and budget-friendly rentals for any journey</p>
      <Link to="/catalog">View Catalog</Link>
    </div>
  );
};

export default HomePage;
