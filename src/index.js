import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Home from './pages/Home';
import Play from './pages/Play';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import ResponsiveRedesign from './pages/projects/ResponsiveRedesign';
import IterativeDesign from './pages/projects/IterativeDesign';
import Development from './pages/projects/Development';
import Personas from './pages/projects/Personas';
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Navigation />
    <App />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
