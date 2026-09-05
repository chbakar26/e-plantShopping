import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper function to convert "$15" string to a number
  const parseCost = (costStr) => parseFloat(costStr.replace('$', ''));

  // Calculate totals
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCartAmount = cartItems.reduce((total, item) => total + (parseCost(item.cost) * item.quantity), 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div>
      {/* Navbar Implementation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white' }}>
        <div className="nav-logo">
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>Paradise Nursery</Link>
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Plants</Link>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span style={{ marginLeft: '5px', backgroundColor: '#fff', color: '#4CAF50', borderRadius: '50%', padding: '2px 8px', fontWeight: 'bold' }}>
              {totalCartItems}
            </span>
          </Link>
        </div>
      </nav>

      {/* Cart Items Implementation */}
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Shopping Cart</h2>
        
        <div style={{ textAlign: 'center', fontSize: '20px', marginBottom: '30px', fontWeight: 'bold' }}>
          Total Plants in Cart: {totalCartItems} | Total Cost: ${totalCartAmount.toFixed(2)}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cartItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #ddd', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                <div>
                  <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                  <p style={{ margin: '0', color: '#555' }}>Unit Price: {item.cost}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '1', justifyContent: 'center' }}>
                <button onClick={() => handleDecrement(item)} style={{ padding: '5px 15px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px' }}>-</button>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)} style={{ padding: '5px 15px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px' }}>+</button>
              </div>

              <div style={{ flex: '1', textAlign: 'right' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                  Subtotal: ${(parseCost(item.cost) * item.quantity).toFixed(2)}
                </p>
                <button onClick={() => handleRemove(item.name)} style={{ padding: '8px 15px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
              </div>

            </div>
          ))}

          {cartItems.length === 0 && (
            <p style={{ textAlign: 'center', fontSize: '18px', color: '#777' }}>Your cart is empty.</p>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', padding: '20px 0', borderTop: '2px solid #eee' }}>
          <Link to="/products">
            <button style={{ padding: '12px 25px', backgroundColor: '#4CAF50', color: 'white', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
              Continue Shopping
            </button>
          </Link>
          <button onClick={handleCheckout} style={{ padding: '12px 25px', backgroundColor: '#1e3a5f', color: 'white', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
