import "./App.css";
import "./css/container.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.tsx";
import CatalogPage from "./pages/CatalogPage.tsx";
import DescriptionPage from "./pages/DescriptionCarPage.tsx";
import Header from "./components/Header/Header.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DescriptionPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
