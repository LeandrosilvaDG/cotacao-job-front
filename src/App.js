import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// Routes
import Routes from './common/routes/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
