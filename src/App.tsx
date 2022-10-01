import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./css/style.scss";

import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { Entertainment } from "./pages/Entertainment";
import { Business } from "./pages/Business";
import { Travel } from "./pages/Travel";

import { fetchToplineArticles } from "./features/articles/toplineArticlesSlice";
import { fetchEntertainmentArticles } from "./features/articles/entertainmentArticlesSlice";
import { fetchBusinessArticles } from "./features/articles/businessArticlesSlice";
import { fetchTravelArticles } from "./features/articles/travelArticlesSlice";
import { fetchWeatherInfo } from "./features/weather/weatherSlice";
import { useAppDispatch } from "./app/hook";
import { useAppSelector } from "./app/hook";

import { GlobalLoader } from "./components/Loader/GlobalLoader";

function App() {
  const dispatch = useAppDispatch();
  const { token, lang } = useAppSelector((state) => ({
    token: state.globalSettings.token,
    lang: state.globalSettings.lang,
  }));

  const isLoading = useAppSelector((state) => state.toplineArticles.isLoading);

  const entertainmentKeyword = useAppSelector(
    (state) => state.entertainmentArticles.keyword
  );

  const businessKeyword = useAppSelector(
    (state) => state.businessArticles.keyword
  );

  const travelKeyword = useAppSelector((state) => state.travelArticles.keyword);

  useEffect(() => {
    dispatch(fetchWeatherInfo());
  }, []);

  /**Note: GNews API limited maximun request per sec by 1 for free user */
  useEffect(() => {
    dispatch(fetchToplineArticles({ token, lang }));
  }, [token, lang]);

  useEffect(() => {
    /**Use setTimeOut to limit request per sec. */
    const timer = setTimeout(
      () =>
        dispatch(
          fetchEntertainmentArticles({
            token,
            lang,
            keyword: entertainmentKeyword,
          })
        ),
      2000
    );
    return () => clearTimeout(timer);
  }, [token, lang, entertainmentKeyword]);

  useEffect(() => {
    /**Use setTimeOut to limit request per sec. */
    const timer = setTimeout(
      () =>
        dispatch(
          fetchBusinessArticles({ token, lang, keyword: businessKeyword })
        ),
      4000
    );
    return () => clearTimeout(timer);
  }, [token, lang, businessKeyword]);

  useEffect(() => {
    /**Use setTimeOut to limit request per sec. */
    const timer = setTimeout(
      () =>
        dispatch(fetchTravelArticles({ token, lang, keyword: travelKeyword })),
      6000
    );
    return () => clearTimeout(timer);
  }, [token, lang, travelKeyword]);

  if (isLoading) {
    return (
      <>
        <GlobalLoader />
      </>
    );
  }

  return (
    <div>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="entertainment" element={<Entertainment />} />
            <Route path="business" element={<Business />} />
            <Route path="travel" element={<Travel />} />
            <Route path="*" element={<>PAGE NOT FOUND</>} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
