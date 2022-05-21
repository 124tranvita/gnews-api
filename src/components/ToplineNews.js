import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ControlledCarousel from "./ControlledCarousel";
import styles from "../style/topline.module.css";
import { fetchTopline } from "../actions/fetchTopline";

function ToplineNews() {
  const dispatch = useDispatch();

  const { loading, articles, error } = useSelector(state => ({
    loading: state.topline.loading,
    articles: state.topline.articles,
    error: state.topline.error
  }))


  useEffect(() => {
    dispatch(fetchTopline());
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.loadingPanel}>
        <div className={styles.loader}></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.loadingPanel}>
        <div className={styles.error}>{error.message}</div>
      </div>
    )
  }

  return (
    <>
      <ControlledCarousel articles={articles} />
    </>
  );
}

export default ToplineNews;