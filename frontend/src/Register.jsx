// Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.password2) {
            alert("Passwords do not match.");
            return;
        }
        try {
            await axios.post('http://localhost:8000/register/', formData);
            alert("Registration successful!");
        } catch (error) {
            console.error(error.response.data); 
            alert("Registration failed: " + JSON.stringify(error.response.data));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md border border-lime-200"
            >
                <h2 className="text-2xl font-bold text-center text-lime-600">Register</h2>

                <input 
                    type="text" 
                    name="username" 
                    onChange={handleChange} 
                    placeholder="Username" 
                    required 
                    className="w-full px-4 py-2 border border-lime-300 rounded focus:outline-none focus:border-lime-500"
                />
                
                <input 
                    type="email" 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                    className="w-full px-4 py-2 border border-lime-300 rounded focus:outline-none focus:border-lime-500"
                />
                
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password" 
                    required 
                    className="w-full px-4 py-2 border border-lime-300 rounded focus:outline-none focus:border-lime-500"
                />
                
                <input 
                    type="password" 
                    name="password2" 
                    onChange={handleChange} 
                    placeholder="Confirm Password" 
                    required 
                    className="w-full px-4 py-2 border border-lime-300 rounded focus:outline-none focus:border-lime-500"
                />
                
                <button 
                    type="submit" 
                    className="w-full px-4 py-2 text-white bg-lime-600 rounded hover:bg-lime-700 focus:outline-none"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
