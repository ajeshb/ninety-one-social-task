import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './modules/routes/Routes';

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
        
      </div>
      <footer>
          footer
      </footer>
    </div>
  );
}

export default App;
