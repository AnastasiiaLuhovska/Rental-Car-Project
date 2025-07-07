import "./App.css";
import "./css/container.css";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import SharedLayout from "./pages/SharedLayout.tsx";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.tsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.tsx"));
const DescriptionPage = lazy(
  () => import("./pages/DescriptionPage/DescriptionCarPage.tsx"),
);
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.tsx"),
);

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DescriptionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
