import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Glass from './components/Glass';
import Resume from './components/Resume';
import { useEffect, useState } from 'react';

const appStyle = {
  textAlign: 'center',
  height: '100vh',
  width: '100vw',
  background: '#282c34'
}

function App() {
  return (
     <HashRouter>
      <div style={appStyle}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Glass />} />
          <Route path="/about" element={<Home />} />
          <Route path="/todos" element={<Resume />} />
        </Routes>
      </div>
     </HashRouter>
  );
}

export default App;
