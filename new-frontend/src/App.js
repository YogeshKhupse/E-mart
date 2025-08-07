
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

//import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';


const AppContent = () => {
  const location = useLocation();

  // Hide header/footer on login or register pages
  const hideLayout = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         {/* <Route path="/home" element={<Home />} /> */}
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
