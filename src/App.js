
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/Sign up/SignUp';
import Login from './Components/Login/Login';
import LoginSuccess from './Components/Login Success/LoginSuccess';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/signup" element={<SignUp />} />

          <Route path= "/login" element={<Login />} />
          <Route path= "/loginsuccess" element={<LoginSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
