import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Pricelist from './pages/pricelist';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricelist" element={<Pricelist />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
