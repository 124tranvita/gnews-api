import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'flag-icons';
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './components/Layout';
import routes from './routes';
import debounce from './utils/debounce';
import { fetchToplines } from './features/toplines/toplinesSlice';
import { fetchLatest } from './features/latest/latestSlice';
import { fetchPolitics } from './features/politics/politicsSlice';
import { fetchSports } from './features/sports/sportsSlice';
import { fetchEntertainment } from './features/entertainment/entertainmentSlice';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.settings.token);
  const lang = useSelector((state) => state.settings.lang);
  const topic = useSelector((state) => state.latest.topic);

  // Fetch Topline News
  useEffect(() => {
    const debounceFetch = debounce(() => dispatch(fetchToplines({ token, lang })), 0);
    debounceFetch();
  }, [dispatch, token, lang]);

  // Fetch Latest News
  useEffect(() => {
    const debounceFetch = debounce(() => dispatch(fetchLatest({ token, lang, topic })), 2000);
    debounceFetch();
  }, [dispatch, token, lang, topic]);

  // Fetch Politics News
  useEffect(() => {
    const debounceFetch = debounce(() => dispatch(fetchPolitics({ token, lang })), 4000);
    debounceFetch();
  }, [dispatch, token, lang]);

  // Fetch Sports News
  useEffect(() => {
    const debounceFetch = debounce(() => dispatch(fetchSports({ token, lang })), 6000);
    debounceFetch();
  }, [dispatch, token, lang]);

  // Fetch Entertainment News
  useEffect(() => {
    const debounceFetch = debounce(() => dispatch(fetchEntertainment({ token, lang })), 8000);
    debounceFetch();
  }, [dispatch, token, lang]);

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
