import { Parallax } from 'react-parallax';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import SecondContainer from './components/SecondContainer';
import Clients from './components/Clients';
import Track from './components/Track';
import Footer from './components/Footer';

function App() {
  return (
    <div>
       <Navbar/>
       <Banner/>
       <SecondContainer/>
       <Clients/>
       <Track/>
       <Footer/>
    </div>
  );
}

export default App;
