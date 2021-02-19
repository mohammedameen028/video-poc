import logo from './logo.svg';
import VideoContainer from './components/VideoContainer'
import Header from './components/Header'
import Description from './components/Description'
import ShopingCart from  './components/ShopingCart'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Description/> */}
      <VideoContainer/>
    </div>
  );
}

export default App;
