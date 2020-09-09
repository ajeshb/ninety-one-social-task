import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
  
import Routes from './modules/routes/Routes'
import Header from './components/layout/Header'

import 'react-toastify/dist/ReactToastify.css'
import './app.scss'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
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
