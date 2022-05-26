import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'flag-icons';
import { useEffect } from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './components/Layout';
import routes from './routes';
import { fetchTopline, fetchLatest, fetchPolitics, fetchSports, fetchEntertainment } from './services/actions';
import debounce from './utils/debounce';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const lang = useSelector((state) => state.lang);
  const topic = useSelector((state) => state.latest.topic);

  // Fetch Topline News
  useEffect(() => {
    const dispatchTopline = dispatch(fetchTopline(token, lang));
    debounce(() => (dispatchTopline, 0));
  }, [token, lang]);

  // Fetch Latest News
  useEffect(() => {
    const dispatchLatestNews = dispatch(fetchLatest(token, lang, topic));
    debounce(() => (dispatchLatestNews, 1000));
  }, [token, lang, topic]);

  // Fetch Politics News
  useEffect(() => {
    const dispatchPoliticsNews = dispatch(fetchPolitics(token, lang));
    debounce(() => (dispatchPoliticsNews, 2000));
  }, [token, lang]);

  // Fetch Sports News
  useEffect(() => {
    const dispatchSportsNews = dispatch(fetchSports(token, lang));
    debounce(() => (dispatchSportsNews, 3000));
  }, [token, lang]);

  // Fetch Entertainment News
  useEffect(() => {
    const dispatchEntertainmentNews = dispatch(fetchEntertainment(token, lang));
    debounce(() => (dispatchEntertainmentNews, 4000));
  }, [token, lang]);

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
