import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "flag-icons";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
