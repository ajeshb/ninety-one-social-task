import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  
import Routes from './modules/routes/Routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header>
        <p>Header</p>
          <nav>
            <ul>
              
            </ul>
          </nav>
      </header>
      <div className="container">

        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <ToastContainer />
      </div>
      <footer>
          footer
      </footer>
    </div>
  );
}

export default App;
