import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemPage from './components/ItemPage/ItemPage';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id/:category" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
