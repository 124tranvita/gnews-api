import Header from './components/Header';
import Toplines from './components/Toplines';
import Footer from './components/Footer';

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-container">
        <Toplines />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
