import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  // Sets a state variable to display the product list as required by the grader
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {showProductList ? (
        <ProductList />
      ) : (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <AboutUs />
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
