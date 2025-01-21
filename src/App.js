import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/personal-page/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
