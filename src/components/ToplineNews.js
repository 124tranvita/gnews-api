import { useState, useEffect } from "react";
import axios from "axios";
import ControlledCarousel from "./ControlledCarousel";
import LatestNews from './LatestNews';
import styles from "../style/topline.module.css";

function ToplineNews() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(articles);

  useEffect(() => {
    axios.get("https://gnews.io/api/v4/top-headlines?token=c539d252c8d0a7349c82e59ba7012c7a&lang=en").then((response) => {
      setArticles(response.data.articles)
      setIsLoading(false);
    }).catch((error) => {
      console.log(error)
      setIsLoading(false);
      setError(error.message)
    })
  }, []);

  return (
    <>
      {isLoading && (<div className={styles.loadingPanel}>
        <div className={styles.loader}></div>
      </div>)}
      {error && (<div className={styles.loadingPanel}>
        <div className={styles.error}>{error}</div>
      </div>)}
      {articles.length !== 0 && (<ControlledCarousel articles={articles} />) && <LatestNews articles={articles} />}

    </>
  );
}

export default ToplineNews;