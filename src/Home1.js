import './Home1.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './component/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';

function App() {
  const [profiles, setProfiles] = useState();

  const getProfiles = async () => {

    try {
      const response = await api.get("/profiles");
      console.log(response.data);
      setProfiles(response.data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect( () => {
    getProfiles();
  }, [])

  return (
    <div className="App">
      <Home/>

      <Routes>
 
          <Route path="/" element={<Home />} ></Route>

      </Routes>


    </div>
  );
}

export default App;
