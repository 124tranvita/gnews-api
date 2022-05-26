import images from '../../../assets/images';

function Error({ error }) {
  return (
    <>
      <div className="error-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <img src={images.problem} alt="problem" width="64" height="64" />
              <p className="text-muted">{error.message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
