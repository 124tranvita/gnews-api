import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { Error } from "../Loader";
import { fetchLatest } from "../../services/actions/fetchLatest";
import styles from "./style/latestNews.module.css";

function LatestNews() {
  const dispatch = useDispatch();
  const { loading, articles, error } = useSelector((state) => ({
    loading: state.latest.loading,
    articles: state.latest.articles,
    error: state.latest.error,
  }));
  const lang = useSelector((state) => state.lang);

  const [topic, setTopic] = useState("world");

  useEffect(() => {
    dispatch(fetchLatest(topic, lang));
  }, [dispatch, topic, lang]);

  const sliceArticles = articles.slice(0, 4);

  return (
    <>
      <div className={styles.captionWrapper}>
        <div className={styles.caption}>
          <h4>Latest</h4>
          {/* <button id="politics" className={styles.btnNews} name="politics">
            <p>&#9776;</p>
          </button> */}
          <NavDropdown
            id={styles.topicDropdown}
            title={`Topic ${topic}`}
            menuVariant="dark"
            onSelect={(eventKey) => setTopic(eventKey)}
          >
            <NavDropdown.Item eventKey="world">World</NavDropdown.Item>
            <NavDropdown.Item eventKey="nation">Nation</NavDropdown.Item>
            <NavDropdown.Item eventKey="business">Business</NavDropdown.Item>
            <NavDropdown.Item eventKey="technology">
              Technology
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="entertainment">
              Entertainment
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="sports">Sports</NavDropdown.Item>
            <NavDropdown.Item eventKey="science">Science</NavDropdown.Item>
            <NavDropdown.Item eventKey="health">Health</NavDropdown.Item>
          </NavDropdown>
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

      {!error && !loading && articles.length !== 0 && (
        <LeftPanel sliceArticles={sliceArticles} />
      )}
    </>
  );
}

const LeftPanel = ({ sliceArticles }) => {
  const [item, setItem] = useState(sliceArticles[0]);
  const ulEl = useRef();

  useEffect(() => {
    const liEl = ulEl.current.childNodes;

    // Add active class for fist <li>
    liEl[0].classList.add(styles.active);

    // Remove active class from all <li>
    const clearActiveClass = () => {
      liEl.forEach((li) => {
        li.classList.remove(styles.active);
      });
    };

    // Add click event for every <li> in <ul>
    liEl.forEach((li) => {
      li.addEventListener("click", () => {
        clearActiveClass();
        li.classList.add(styles.active);
      });
    });

    // Clean up function
    return () => {
      liEl.forEach((li) => {
        li.removeEventListener("click", () => {
          clearActiveClass();
          li.classList.add(styles.active);
        });
      });
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-3 col-2">
            <ul className={styles.newsList} ref={ulEl}>
              {sliceArticles.map((article, index) => {
                return (
                  <li key={index} onClick={() => setItem(article)}>
                    <img src={article.image} alt={article.title} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-12 col-sm-9 col-10">
            <RightPanel item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

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
          <a href={item.source.url}>
            <h3>{item.title}</h3>
          </a>
          <p>{item.description}</p>
          <span>{item.publishedAt}</span> | <span>{item.source.name}</span>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
