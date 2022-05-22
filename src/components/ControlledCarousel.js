import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "../style/carousel.module.css"

function ControlledCarousel({ articles }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {articles.map((article, index) => {
          return (
            <Carousel.Item key={index}>
              <div className={styles.carouselFilter}></div>
              <img
                className="d-block w-100"
                src={article.image}
                alt={article.title}
                width="800"
                height="480"
              />
              <Carousel.Caption className={styles.carouselCaption}>
                {article.title.length >= 128 ? (
                  <div className={styles.title}>
                    <h1>{article.title}</h1>
                  </div>
                ) : <h1>{article.title}</h1>}

                <p>{article.description}</p>
                <span>{article.publishedAt}</span> | <span>{article.source.name}</span> | <a href={article.source.url}><span>Read more...</span></a>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  );
}

export default ControlledCarousel;