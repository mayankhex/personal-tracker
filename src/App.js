import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Drink from './components/Drink';

function App() {
  return (
     <HashRouter>
      <div className="App">
        <header className="App-header">
          <NavigationBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Drink />} />
        </Routes>
      </div>
     </HashRouter>
  );
}

export default App;
