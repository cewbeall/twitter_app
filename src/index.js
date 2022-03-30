import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Profiles from './routes/Profiles.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Profiles" element={<Profiles />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
