import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken } from "../utils/auth";

//import { useCart } from '../../context/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef();
  //const { cartItems } = useCart();

  const toggleMenu = () => setShowProfileMenu(prev => !prev);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      borderBottom: '1px solid #ccc',
      backgroundColor: '#f9f9f9',
      position: 'relative'
    }}>
      {/* Logo / Home */}
      <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        🛒 My E-Commerce
      </h1>

      {/* Right Side Icons */}
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          🏠 Home
        </span>

        <span onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
          {/* 🛍️ Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)}) */}
        </span>

        <span onClick={toggleMenu} style={{ cursor: 'pointer' }}>
          👤
        </span>
      </div>

      {/* Profile Dropdown */}
      {showProfileMenu && (
        <div ref={menuRef} style={{
          position: 'absolute',
          top: '60px',
          right: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: 'white',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
          padding: '10px',
          zIndex: 100,
          width: '150px'
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li
              style={{ padding: '5px 0', cursor: 'pointer' }}
              onClick={() => alert('Profile page coming soon')}
            >
              My Profile
            </li>
            <li
              style={{ padding: '5px 0', cursor: 'pointer' }}
              onClick={() => alert('Orders page coming soon')}
            >
              Orders
            </li>
          <li
            style={{ padding: '5px 0', cursor: 'pointer', color: 'red' }}
            onClick={() => {
             removeToken();        // Clear auth token
             navigate('/login');   // Redirect to login
          }}
          >
          Logout
          </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
