import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-lime-50 text-center py-6 mt-auto">
            <h1 className="text-3xl">Why Choose Us?</h1>
            <p className="p-4 text-md">
                At Vaidhya, we are committed to providing authentic Ayurvedic products crafted from the finest natural ingredients. Our products are designed to support your health and wellness journey.
            </p>
            <Link to="/about">
                <button className="bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600">
                    Learn More About Us
                </button>
            </Link>
        </footer>
    );
}

export default Footer;
