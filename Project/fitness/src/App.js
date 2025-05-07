import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Feature from "./Pages/Feature";
import Team from "./Pages/Team";
import Test from "./Pages/Test";
import Adash from "./Admin/Pages/Adash";
import Acontact from "./Admin/Pages/Acontact";
import Acource from "./Admin/Pages/Acource";
import Alogin from "./Admin/Pages/Alogin";
import { ToastContainer } from "react-toastify";
import Aabout from "./Admin/Pages/Aabout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/team" element={<Team />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Error />} />

          <Route path="/dash" element={<Adash />} />
          <Route path="/acontact" element={<Acontact />} />
          <Route path="/acourse" element={<Acource />} />
          <Route path="/alogin" element={<Alogin />} />
          <Route path="/aabout" element={<Aabout />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
