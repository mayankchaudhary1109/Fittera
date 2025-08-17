
import Navbar from './components/Navbar'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Gallery from './components/Router/Image';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="image" element={<Gallery/>} />
      <Route path="/" element={<Main/>} />
      <Route path="about" element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   
    

    </>
  );
}

export default App;
