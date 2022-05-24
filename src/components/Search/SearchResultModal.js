import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Card } from "react-bootstrap";
import { closeResultModal } from "../../services/actions/fetchSearch";
import { Loader, Error } from "../Loader";

function SearchResultModal({ keyword }) {
  const dispatch = useDispatch();

  const { loading, articles, error, show } = useSelector((state) => ({
    loading: state.search.loading,
    articles: state.search.articles,
    error: state.search.error,
    show: state.search.show,
  }));

  const handleClose = () => dispatch(closeResultModal());

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Result for "{keyword}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <Loader />}
          {error && (
            <div style={{ height: "150px" }}>
              <Error error={error} />
            </div>
          )}
          {!loading && !error && articles.length === 0 && <NotFound />}
          {!loading && !error && articles.length !== 0 && (
            <div className="row">
              {articles.map((article, index) => (
                <div className="col-12" key={index}>
                  <Card className="bg-dark text-white mt-2">
                    <Card.Img
                      src={article.image}
                      alt={article.title}
                      width="731"
                      height="270"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>
                        <a href={article.source.url}>{article.title}</a>
                      </Card.Title>
                      <Card.Text>
                        <p>{article.description}</p>
                      </Card.Text>
                      <Card.Text>
                        <span>{article.publishedAt}</span> |{" "}
                        <span>{article.source.name}</span>
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const NotFound = () => (
  <>
    <div className="container-fluid">
      <div className="row">
        <div className="text-center">
          <img
            src="assets/images/notfound.svg"
            alt="notfound-logo"
            height="64"
            width="64"
          />
          <p className="text-muted">No acticles was found!</p>
        </div>
      </div>
    </div>
  </>
);

export default SearchResultModal;
