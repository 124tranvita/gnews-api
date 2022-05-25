import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ToplineNews,
  LatestNews,
  PoliticsNews,
  SportsNews,
  EntertainmentNews,
  PoliticsPage,
  SportsPage,
  EntertainmentPage,
} from "../../components/News";

import {
  fetchLatest,
  fetchPolitics,
  fetchSports,
  fetchEntertainment,
} from "../services/actions";

const HomePage = () => (
  <>
    <LatestNews />
    <PoliticsNews />
    <SportsNews />
    <EntertainmentNews />
  </>
);

function Main() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const topic = useSelector((state) => state.latest.topic);
  const token = useSelector((state) => state.token);

  // Fetch Latest News
  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(fetchLatest(topic, lang, token)),
      1000
    );
    // Cleanup function
    return () => clearTimeout(timer);
  }, [dispatch, topic, lang, token]);

  // Fetch Politics News
  useEffect(() => {
    const timer = setTimeout(() => dispatch(fetchPolitics(lang, token)), 2500);
    // Cleanup function
    return () => clearTimeout(timer);
  }, [dispatch, lang, token]);

  // Fetch Sports News
  useEffect(() => {
    const timer = setTimeout(() => dispatch(fetchSports(lang, token)), 4500);
    // Cleanup function
    return () => clearTimeout(timer);
  }, [dispatch, lang, token]);

  // Fetch Entertainment News
  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(fetchEntertainment(lang, token)),
      6500
    );
    // Cleanup function
    return () => clearTimeout(timer);
  }, [dispatch, lang, token]);

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
