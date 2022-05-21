import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import ToplineNews from './components/ToplineNews';
import LatestNews from './components/LatestNews';


function App() {
  return (
    <div className="App">
      <div className='main-wrapper'>
        <Header />
        <ToplineNews />
        <LatestNews />
      </div>
    </div>
  );
}

export default App;
