import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './index.css';
import Home from './component/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/Layout';

export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>

    //     <Route path="*" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

// When Route is not working , use Below Code
    <div ><Home></Home></div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);