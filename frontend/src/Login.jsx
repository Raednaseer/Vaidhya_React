import React, { useState } from 'react';
import axios from 'axios';

function Login({ setAuth }) {  
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login/', formData);
            if (response.data.access && response.data.refresh) {
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                setAuth(true);  // Set auth status to true upon successful login
                alert("Login successful!");
            } else {
                alert("Login failed: Invalid response data");
            }
        } catch (error) {
            console.error(error);
            alert("Login failed.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-sm p-6 space-y-4 bg-white rounded-lg shadow-md border border-lime-200"
            >
                <h2 className="text-2xl font-bold text-center text-lime-600">Login</h2>

                <input 
                    type="text" 
                    name="username" 
                    onChange={handleChange} 
                    placeholder="Username" 
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
                
                <button 
                    type="submit" 
                    className="w-full px-4 py-2 text-white bg-lime-600 rounded hover:bg-lime-700 focus:outline-none"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
