import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';
import Cart from './Cart';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import { CartProvider } from './CartContext';

function App() {
  const [auth, setAuth] = useState(null); // Initialize state for authentication

  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login setAuth={setAuth} />} /> {/* Pass setAuth as prop */}
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
