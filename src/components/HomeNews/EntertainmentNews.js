import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./style/homeNews.module.css";
import ArticlesView from "../ShowArticles/ArticlesView";
import { fetchEntertainment } from "../../services/actions/fetchEntertainment";
import { Error } from "../Loader";

function EntertainmentNews() {
  const [view, setView] = useState(3);
  const [button, setButton] = useState("\u21C9");
  const dispatch = useDispatch();
  const { loading, articles, error } = useSelector((state) => ({
    loading: state.entertainment.loading,
    articles: state.entertainment.articles,
    error: state.entertainment.error,
  }));
  const lang = useSelector((state) => state.lang);

  useEffect(() => {
    dispatch(fetchEntertainment(lang));
  }, [lang]);

  // Handle button click
  const handleClick = () => {
    if (button === "\u21C9") {
      setView(6);
      setButton("\u21CA");
    } else {
      setView(3);
      setButton("\u21C9");
    }
  };
  return (
    <>
      <div className={styles.captionWrapper}>
        <div className={styles.caption}>
          <h4>Entertainment</h4>
          <button
            id="entertainment"
            className={styles.btnNews}
            name="entertainment"
            onClick={handleClick}
          >
            <p>{button}</p>
          </button>
        </div>
      </div>

      {loading && (
        <div className={styles.loadingPanel}>
          <div className={styles.loader}></div>
        </div>
      )}

      {!loading && error && (
        <div className={styles.loadingPanel}>
          <Error error={error} />
        </div>
      )}

      {!error && articles.length === 0 && (
        <div className={styles.loadingPanel}>
          <div className={styles.error}>
            Your selected language does not have any related news at this time!
          </div>
        </div>
      )}

      {!error && !loading && articles.length != 0 && (
        <ArticlesView articles={articles} view={view} />
      )}
    </>
  );
}

export default EntertainmentNews;
