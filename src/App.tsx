import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemCard from './components/ItemCard/ItemCard';
// import ItemPage from './components/ItemPage/ItemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/details" element={<h1>Details Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
