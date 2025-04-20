// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './Routing/Footer';
// import Navbar from './Routing/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Routing/Home';
import About from './Routing/About';
import Contact from './Routing/Contact';
import 'font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Footer/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
