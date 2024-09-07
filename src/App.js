import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Drink from './components/Drink';

function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavigationBar />
        </header>
        <Routes>
          <Route path="/personal-tracker" element={<Home />} />
          <Route path="/personal-tracker/about" element={<Drink />} />
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
