import './App.css';
import About from './components/About';
import AdsBar from './components/AdsBar';
import Clients from './components/Clients';
import Explore from './components/Explore';
import Featured from './components/Featured';
import Navbar from './components/Navbar';
import RecommendedVideos from './components/RecommendedVideos';
import Shop from './components/Shop';
import Slider from './components/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AdsBar />
      <Navbar />
      <Slider />
      <Featured />
      <About />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
