import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutUs from './AboutUs';
// You will uncomment these as you build them in the next steps:
// import ProductList from './ProductList';
// import CartItem from './CartItem';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        {/* Company Name */}
        <h1>Paradise Nursery</h1>
        
        {/* Paragraph about the company */}
        <AboutUs />
        
        {/* Get Started button linking to the product page */}
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Placeholder routes for your upcoming components */}
        {/* <Route path="/products" element={<ProductList />} /> */}
        {/* <Route path="/cart" element={<CartItem />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
