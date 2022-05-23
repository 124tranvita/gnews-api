import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "../../components/Loader";
import ToplineNews from "../../components/HomeNews/ToplineNews";
import PoliticsPage from "./PoliticsPage";
import SportsPage from "./SportsPage";
import EntertainmentPage from "./EntertainmentPage";

const LatestNews = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2 * 1000)).then(() =>
    import("../../components/HomeNews/LatestNews")
  );
});

const PoliticsNews = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 4 * 1000)).then(() =>
    import("../../components/HomeNews/PoliticsNews")
  );
});

const SportsNews = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 6 * 1000)).then(() =>
    import("../../components/HomeNews/SportsNews")
  );
});

const EntertainmentsNews = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 8 * 1000)).then(() =>
    import("../../components/HomeNews/EntertainmentNews")
  );
});

const HomePage = () => (
  <>
    <Suspense fallback={<Loader />}>
      <LatestNews />
    </Suspense>
    <Suspense fallback={<Loader />}>
      <PoliticsNews />
    </Suspense>
    <Suspense fallback={<Loader />}>
      <SportsNews />
    </Suspense>
    <Suspense fallback={<Loader />}>
      <EntertainmentsNews />
    </Suspense>
  </>
);

function Main() {
  return (
    <>
      <ToplineNews />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="politics" element={<PoliticsPage />} />
        <Route path="sports" element={<SportsPage />} />
        <Route path="entertainment" element={<EntertainmentPage />} />
      </Routes>
    </>
  );
}

export default Main;
