import { type FC, Suspense } from "react";
import Header from "../components/Header/Header.tsx";
import { Outlet } from "react-router";
import Loader from "../components/Loader/Loader.tsx";

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
