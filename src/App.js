import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from "./components/Navbar.js";
import Header from "./components/Header.js";
import RestaurantHours from "./components/Hours.js";
import About from "./components/About.js";
import PriceChangePage from './components/PriceChangePage.js';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Banner from './components/Banner.js';
import Clock from './components/Clock.js';

function App() {
  return (
    <Router>
      <Banner />
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <div className="container mt-4">
            </div>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/hours" element={[<Clock />, <RestaurantHours />]} />
        <Route path="/pricechange" element={<PriceChangePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
//concurrently \"react-scripts start && set PORT=5001\" \"cd ../backend && nodemon server.js\" --> for package.json just in case
export default App;
