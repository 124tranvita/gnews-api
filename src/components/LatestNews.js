import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import styles from "../style/latestNews.module.css"


function LatestNews({ articles }) {

  const sliceArticles = articles.slice(0, 4);
  const [item, setItem] = useState(sliceArticles[0]);
  const ulEl = useRef();

  useEffect(() => {
    const liEl = ulEl.current.childNodes;

    const clearActiveClass = () => {
      liEl.forEach((li) => {
        li.classList.remove(styles.active)
      })
    }

    liEl.forEach((li) => {
      li.addEventListener('click', () => {
        clearActiveClass();
        li.classList.add(styles.active)
      })
    })

    return () => {
      liEl.forEach((li) => {
        li.removeEventListener('click', () => {
          clearActiveClass();
          li.classList.add(styles.active)
        })
      })
    }
  }, []);

  return (
    <>
      <div className={styles.captionWrapper}>
        <div className={styles.caption}>
          <h4>Latest News</h4>
          <button id="politics" className={styles.btnNews} name="politics">
            <p>&#9776;</p>
          </button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-3 col-2">
            <ul className={styles.newsList} ref={ulEl}>
              {sliceArticles.map((article, index) => {
                return (
                  <li key={index} onClick={() => setItem(article)}>
                    <img
                      className="d-block w-100"
                      src={article.image}
                      alt={article.title}
                      width="32"
                      height="96"
                    />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="col-12 col-sm-9 col-10">
            <RightPanel item={item} />
          </div>
        </div>
      </div>
    </>
  )
}

const RightPanel = ({ item }) => {
  return (
    <>
      <div className={styles.panelWrapper}>
        <img
          className="d-block w-100"
          src={item.image}
          alt={item.title}
          height="460"
        />
        <div className={styles.newsCaption}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span>{item.publishedAt}</span> | <span>{item.source.name}</span>
        </div>
      </div>
    </>
  )
}


export default LatestNews;