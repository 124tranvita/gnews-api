import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ControlledCarousel } from "../ShowArticles";
import styles from "./style/topline.module.css";
import { fetchTopline } from "../../services/actions/fetchTopline";
import { Error } from "../Loader";

function ToplineNews() {
  const dispatch = useDispatch();
  const { loading, articles, error } = useSelector((state) => ({
    loading: state.topline.loading,
    articles: state.topline.articles,
    error: state.topline.error,
  }));
  const lang = useSelector((state) => state.lang);

  useEffect(() => {
    dispatch(fetchTopline(lang));
  }, [dispatch, lang]);

  if (loading) {
    return (
      <div className={styles.loadingPanel}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.loadingPanel}>
        <Error error={error} />
      </div>
    );
  }

  return (
    <>
      <ControlledCarousel articles={articles} />
    </>
  );
}

export default ToplineNews;
