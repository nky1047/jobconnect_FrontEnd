import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './component/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';

function App() {
  const [profiles, setProfiles] = useState();
  const getProfiles = async () => {

    try {
      const response = await api.get("/profiles");
      var msg = "Welcome";
      console.log(response.data);
      console.log(msg);
      setProfiles(response.data);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getProfiles();
  }, [])

  return (
    <div className="App">
        {/* <Layout></Layout>
        <Home></Home> */}

      {/* <Routes>

        <Route path="/" element={<Layout />}>

          <Route path="/" element={<Home />} ></Route>

        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
