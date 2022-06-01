import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { Error } from '../../../Loader';

function Toplines() {
  const { status, articles, error } = useSelector((state) => ({
    status: state.toplines.status,
    articles: state.toplines.articles,
    error: state.toplines.error,
  }));
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (status === 'loading') {
    return (
      <div className="loading-large-panel">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-large-panel">
        <Error error={error} />
      </div>
    );
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {articles.map((article, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="carousel-filter"></div>
              <img className="d-block w-100" src={article.image} alt={article.title} width="800" height="480" />
              <Carousel.Caption className="carousel-caption">
                {article.title.length >= 128 ? (
                  <div className="carousel-caption-long">
                    <h1>{article.title}</h1>
                  </div>
                ) : (
                  <h1>{article.title}</h1>
                )}
                <p>{article.description}</p>
                <span>{article.publishedAt}</span> | <span>{article.source.name}</span> |{' '}
                <a href={article.source.url} target="_blank">
                  <span>Read more...</span>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default Toplines;
