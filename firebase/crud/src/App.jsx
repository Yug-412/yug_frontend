
import { ToastContainer } from 'react-toastify'
import './App.css'

import Home from './pages/Home'
import AddItems from './pages/Additems'
import EditItems from './pages/EditItems'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyState from './context/Mystate'

function App() {


  return (
     <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/additems" element={<AddItems />} />
            <Route path="/edititems" element={<EditItems />} />
            {/* <Route path="/viewitems" element={<ViewItems />} /> */}
          </Routes>
        </BrowserRouter>
      </MyState>
      <ToastContainer />
    </>
  )
}

export default App
