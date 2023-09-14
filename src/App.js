// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import UserList from './components/UserList';
import { AppProvider } from './AppState'; 

import './Navbar.css';

function App() {
  return (
    <AppProvider> 
      <Router>
        <div>
          <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/register">Cadastro</Link>
            <Link to="/userlist">Lista de Usuários</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userlist" element={<UserList />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
