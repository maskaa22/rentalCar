import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import Loader from "./components/loader/Loader";

import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/catalogPage/CatalogPage"));
const CatalogDetailPage = lazy(() =>
  import("./pages/catalogDetailPage/CatalogDetailPage")
);

function App() {
  return (
    <>
      <Loader />
      <Suspense fallback={<Loader isSuspense={true} />}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CatalogDetailPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
