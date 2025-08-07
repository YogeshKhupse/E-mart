// //import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { useLocation } from 'react-router-dom';
// //import SpecialOffers from '../SpecialOffers';

//  const Layout = ({ children }) => {
// //   const location = useLocation();

// //   // Show special offers only on root and subcategories pages
// //   const showSpecialOffers = location.pathname === '/' || location.pathname.startsWith('/subcategories');

//   return (
//     <>
//       <Header />
//       {/* <main>
//         {children}
//         {showSpecialOffers && <SpecialOffers />}
//       </main> */}
//       <Footer />
//     </>
//   );
// };

//  export default Layout;

//src/index.js


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

