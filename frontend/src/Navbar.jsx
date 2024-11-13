import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Navbar() {
    return (
        <>
        <Header />
        <nav className="text-white p-4 flex justify-between items-center bg-lime-950">
            <div className="flex-grow">
                <Link to="/" className="hover:underline text-xl focus:text-lime-300">Vaidhya</Link>
                <Link to="/products" className="hover:underline focus:text-lime-300 px-2 ">Products</Link>
            </div>
            <div className="space-x-4">
                <Link to="/about" className="hover:underline focus:text-lime-300">About</Link>
                <Link to="/cart" className="hover:underline focus:text-lime-300">MyCart</Link>
                <Link to="/login" className="hover:underline focus:text-lime-300">Login</Link>
                <Link to="/register" className="hover:underline focus:text-lime-300">Register</Link>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
