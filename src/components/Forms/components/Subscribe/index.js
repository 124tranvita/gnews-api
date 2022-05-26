import { useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import styles from './Subscribe.module.css';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setEmail('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    handleShow();
    e.preventDefault();
  };

  return (
    <>
      <section className="">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <div className="col-md-5 col-12">
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  className="form-control"
                  id={styles.email}
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>

      <Modal show={show} onHide={handleClose} id={styles.subscribeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{email}</h4>
          <p className="text-muted">Thank for your subscribe!</p>
          <Image src="assets/images/present.svg" alt="subscribe-icon" width="64" height="64" />
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

export default Subscribe;
