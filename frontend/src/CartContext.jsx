import React, { createContext, useState, useContext } from 'react';

// Create Cart Context
const CartContext = createContext();

// Create a custom hook to use the Cart Context
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component to wrap around the app and provide cart state to all components
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
