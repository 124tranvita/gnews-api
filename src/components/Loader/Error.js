import {} from "react-bootstrap";
import styles from "./style/loader.module.css";

function Error({ error }) {
  return (
    <>
      <div className={styles.errorWrapper}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src="assets/images/problem.svg"
                alt="problem"
                width="64"
                height="64"
              />
              <p className="text-muted">{error.message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
