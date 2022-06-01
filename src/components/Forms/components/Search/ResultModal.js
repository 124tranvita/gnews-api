import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Card } from 'react-bootstrap';
import { closeResultModal } from '../../../../features/search/searchSlice';
import { Loader, Error } from '../../../Loader';
import images from '../../../../assets/images';

function ResultModal({ keyword }) {
  const dispatch = useDispatch();

  const { status, articles, error, show } = useSelector((state) => ({
    status: state.search.status,
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
          {status === 'loading' && <Loader />}
          {status === 'failed' && (
            <div style={{ height: '150px' }}>
              <Error error={error} />
            </div>
          )}
          {status === 'succeeded' && !error && articles.length === 0 && <NotFound />}
          {status === 'succeeded' && !error && articles.length !== 0 && (
            <div className="row">
              {articles.map((article, index) => (
                <div className="col-12" key={index}>
                  <Card className="bg-dark text-white mt-2">
                    <Card.Img src={article.image} alt={article.title} width="731" height="270" />
                    <Card.ImgOverlay>
                      <Card.Title>
                        <a href={article.source.url}>{article.title}</a>
                      </Card.Title>
                      <Card.Text>{article.description}</Card.Text>
                      <Card.Text>
                        <span>{article.publishedAt}</span> | <span>{article.source.name}</span>
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
          <img src={images.notfound} alt="notfound-logo" height="64" width="64" />
          <p className="text-muted">No acticles was found!</p>
        </div>
      </div>
    </div>
  </>
);

export default ResultModal;
