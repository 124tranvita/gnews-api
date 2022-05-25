import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <div className="main-container">
        <Header />
        <Carousel />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
