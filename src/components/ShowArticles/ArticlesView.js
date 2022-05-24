import { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import styles from "./style/articlesView.module.css";
import { Error } from "../Loader";

function ArticlesView({ keyword }) {
  const [view, setView] = useState(3);
  const [button, setButton] = useState("\u21C9");
  const { loading, articles, error } = useSelector((state) => ({
    loading: state[keyword].loading,
    articles: state[keyword].articles,
    error: state[keyword].error,
  }));

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
          <h4>{keyword.charAt(0).toUpperCase() + keyword.slice(1)}</h4>
          <button
            id={keyword}
            className={styles.btnNews}
            name={keyword}
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
        <ArticlesList articles={articles} view={view} />
      )}
    </>
  );
}

const ArticlesList = ({ articles, view }) => {
  const sliceArticles = articles.slice(0, view);

  return (
    <div className="container-fluid">
      <div className="row">
        {sliceArticles.map((article, index) => {
          return (
            <div className="col-12 col-sm-6 col-xl-4 mb-2" key={index}>
              <Card style={{ textAlign: "start", height: "40rem" }}>
                <Card.Img
                  variant="top"
                  src={article.image}
                  alt={article.title}
                  style={{ height: "10rem" }}
                />
                <Card.Body>
                  <Card.Title>
                    <a href={article.source.url} className={styles.titleLink}>
                      {article.title}
                    </a>
                  </Card.Title>
                  <Card.Text>{article.content}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    <span>{article.publishedAt}</span> |{" "}
                    <span>{article.source.name}</span>
                  </Card.Text>
                  <Card.Link
                    href={article.source.url}
                    className={styles.footerLink}
                  >
                    Read more...
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesView;
