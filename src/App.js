import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "flag-icons";
import "./App.css";
import React, { Suspense } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ToplineNews from "./components/ToplineNews";
import LatestNews from "./components/LatestNews";
import Loader from "./components/Loader";

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

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <ToplineNews />
        <LatestNews />
        <Suspense fallback={<Loader />}>
          <PoliticsNews />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <SportsNews />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <EntertainmentsNews />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
