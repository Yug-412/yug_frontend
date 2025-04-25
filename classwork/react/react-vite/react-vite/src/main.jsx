import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// // // import 'bootstrap/dist/js/bootstrap.bundle.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Bootstrap JS
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';




import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
