import { useSelector } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import { Card } from 'react-bootstrap';
import styles from './ViewAll.module.css';
import { Error } from '../../../Loader';

function ViewAll({ keyword }) {
  const { status, articles, error } = useSelector((state) => ({
    status: state[keyword].status,
    articles: state[keyword].articles,
    error: state[keyword].error,
  }));

  return (
    <>
      <div className={styles.captionWrapper}>
        <div className={styles.caption}>
          <h4>{keyword.charAt(0).toUpperCase() + keyword.slice(1)}</h4>
        </div>
      </div>

      {status === 'loading' && (
        <div className="loading-large-panel">
          <div className="loader"></div>
        </div>
      )}

      {status === 'failed' && (
        <div className="loading-large-panel">
          <Error error={error} />
        </div>
      )}

      {!error && articles.length === 0 && (
        <div className="loading-large-panel">
          <div className={styles.error}>Oops! No news found!</div>
        </div>
      )}

      {status === 'succeeded' && !error && articles.length !== 0 && <ArticlesListView articles={articles} />}
    </>
  );
}

const ArticlesListView = ({ articles }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {articles.map((article, index) => {
          return (
            <div className="col-12 col-sm-6 col-xl-4 mb-2" key={index}>
              <LazyLoad>
                <Card style={{ textAlign: 'start', height: '40rem' }}>
                  <Card.Img variant="top" src={article.image} alt={article.title} style={{ height: '10rem' }} />
                  <Card.Body>
                    <Card.Title>
                      <a href={article.source.url} className={styles.titleLink} target="_blank">
                        {article.title}
                      </a>
                    </Card.Title>
                    <Card.Text>{article.content}</Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text>
                      <span>{article.publishedAt}</span> | <span>{article.source.name}</span>
                    </Card.Text>
                    <Card.Link href={article.source.url} className={styles.footerLink} target="_blank">
                      Read more...
                    </Card.Link>
                  </Card.Body>
                </Card>
              </LazyLoad>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewAll;
