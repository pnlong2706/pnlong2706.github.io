import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx"
import Contact from './pages/contact.jsx';
import Achievement from './pages/achvm.jsx';
import Experience from './pages/experience.jsx';
import Certificate from './pages/certificate.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certificate" element={<Certificate />} />
        {/* <Route path="/personal-page/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
