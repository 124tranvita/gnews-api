import React, { Suspense } from "react";
import ToplineNews from "./components/ToplineNews";
import { Loader } from "../../components/Loader";

const LatestNews = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2 * 1000)).then(() =>
    import("./components/LatestNews")
  );
});

const PoliticsNews = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 3 * 1000)).then(() =>
    import("./components/PoliticsNews")
  );
});

const SportsNews = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 6 * 1000)).then(() =>
    import("./components/SportsNews")
  );
});

const EntertainmentsNews = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 9 * 1000)).then(() =>
    import("./components/EntertainmentsNews")
  );
});

function Main() {
  return (
    <>
      <ToplineNews />
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
}

export default Main;
