import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import styles from "../style/articlesShow.module.css"

function ArticlesShow({ keyword, fetchData }) {
  const [view, setView] = useState(3);
  const [button, setButton] = useState("\u21C9")
  const dispatch = useDispatch();
  const { loading, articles, error } = useSelector(state => ({
    loading: state[keyword].loading,
    articles: state[keyword].articles,
    error: state[keyword].error
  }));
  const lang = useSelector(state => state.lang)


  useEffect(() => {
    dispatch(fetchData(lang));
  }, [dispatch, lang])

  // Handle button click
  const handleClick = () => {
    if (button === "\u21C9") {
      setView(articles.length);
      setButton("\u21CA");
    }
    else {
      setView(3);
      setButton("\u21C9");
    }

  }
  return (
    <>
      <div className={styles.captionWrapper}>
        <div className={styles.caption}>
          <h4>{keyword.charAt(0).toUpperCase() + keyword.slice(1)}</h4>
          <button id={keyword} className={styles.btnNews} name={keyword} onClick={handleClick}>
            <p>{button}</p>
          </button>
        </div>
      </div>

      {loading && (<div className={styles.loadingPanel}>
        <div className={styles.loader}></div>
      </div>)}

      {error && (<div className={styles.loadingPanel}>
        <div className={styles.error}>{error.message}</div>
      </div>)}

      {!error && articles.length === 0 && (<div className={styles.loadingPanel}>
        <div className={styles.error}>Your selected language does not have any related news at this time!</div>
      </div>)}

      {articles.length !== 0 && (<ArticlesView articles={articles} view={view} />)}
    </>
  )
}

const ArticlesView = ({ articles, view }) => {

  const sliceArticles = articles.slice(0, view);

  return (
    <div className="container-fluid">
      <div className="row">
        {sliceArticles.map((article, index) => {
          return (
            <div className="col-12 col-sm-6 col-xl-4 mb-2" key={index}>
              <Card style={{ textAlign: 'start', height: '40rem' }} >
                <Card.Img
                  variant="top"
                  src={article.image}
                  alt={article.title}
                  style={{ height: '10rem' }}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>
                    {article.content}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text>
                    <span>{article.publishedAt}</span> | <span>{article.source.name}</span>
                  </Card.Text>
                  <Card.Link href={article.source.url}>Read more...</Card.Link>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ArticlesShow;



