// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import AddService from './components/AddService';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/add-service" component={AddService} />
          <Route path="/success" component={Success} />
          <Route path="/cancel" component={Cancel} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
