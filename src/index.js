import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Experience from "./Experience";
import Home from './pages/Home';
import NavBar from './NavBar';
import Projects from "./pages/Projects";
import Skills from './Skills';
import './index.css';

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
    <HashRouter>
      <NavBar open={open} setOpen={setOpen}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </HashRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);