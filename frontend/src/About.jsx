import React from 'react';

function About() {
    return (
        <div className="bg-green-50 py-10">
            <div className="container mx-auto px-6 text-center">
                {/* Hero Section */}
                <h1 className="text-4xl font-bold text-lime-600 mb-4">About Vaidhya</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Premium Ayurvedic Products for Health and Happiness
                </p>
                
                {/* Our Journey Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-lime-600">Our Journey</h2>
                    <p className="text-gray-700 mt-2">
                        Vaidhya was born from a deep respect for ancient Ayurvedic traditions and a
                        desire to bring authentic, high-quality Ayurvedic products to modern
                        wellness. Each product is crafted with care, embracing ethical sourcing and
                        sustainable practices.
                    </p>
                </div>
                
                {/* Our Promise Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-lime-600">The Vaidhya Promise</h2>
                    <p className="text-gray-700 mt-2">
                        We stand by our values: <span className="font-bold">Purity, Quality, Transparency,</span>
                        and <span className="font-bold">Customer Care</span>. Our rigorous quality checks and
                        commitment to natural, chemical-free processes ensure that every product
                        reflects our dedication to your well-being.
                    </p>
                </div>
                
                {/* Our Products Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-lime-600">Crafted for Your Well-Being</h2>
                    <p className="text-gray-700 mt-2">
                        From skincare to wellness supplements, every Vaidhya product is rooted in
                        authentic Ayurvedic recipes. With pure herbs, roots, and natural ingredients,
                        we bring the essence of Ayurveda into your life.
                    </p>
                </div>
                
                {/* Testimonials Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-lime-600">What Our Customers Say</h2>
                    <p className="text-gray-700 mt-2 italic">
                        "Vaidhya products have transformed my wellness journey. The quality and
                        authenticity are unmatched!" – Satisfied Customer
                    </p>
                </div>
                
                {/* Meet Our Experts Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-semibold text-lime-600">Guided by Ayurvedic Masters</h2>
                    <p className="text-gray-700 mt-2">
                        Our team includes certified Ayurvedic practitioners and experts who
                        passionately contribute to each product's development, ensuring the highest
                        standards of quality and authenticity.
                    </p>
                </div>
                
                {/* Contact & Connect Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-lime-600">Stay Connected</h2>
                    <p className="text-gray-700 mt-2">
                        Have questions or want to learn more? Connect with us for guidance or sign up
                        for our newsletter for wellness tips and product launches.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
