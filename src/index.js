import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './component/Layout';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      {/* <BrowserRouter></BrowserRouter> */}
    
    
     {/* <BrowserRouter>
      <Routes>

        <Route path="/*" element={<App/>}/>

      </Routes>

    </BrowserRouter>  */}
    <App/>
  </React.StrictMode>
);