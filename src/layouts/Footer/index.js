import Subscribe from "../../components/Subscribe";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white mt-4">
        <div className="container p-4 pb-0">
          <Subscribe />
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span>© 2022 Copyright:</span>
          <span className="mx-2">
            <a className="text-white" href="https://gnews.io/">
              GNews API - phuocthFX15563
            </a>
          </span>
          <span className="mx-2">|</span>
          <span className="mx-2">
            Follow us on
            <i className="bi bi-facebook mx-2"></i>
            <i className="bi bi-twitter mx-2"></i>
            <i className="bi bi-github mx-2"></i>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
