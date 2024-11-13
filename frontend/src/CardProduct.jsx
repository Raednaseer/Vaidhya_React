import React from 'react';
import { useCart } from './CartContext';  // Use CartContext

function CardProduct(props) {
    const { addToCart } = useCart();  // Get addToCart function from CartContext

    const handleAddToCart = () => {
        const isAuthenticated = localStorage.getItem('access');
        
        if (!isAuthenticated) {
            alert("You need to log in to add items to the cart.");
            // You can redirect to login here if needed
        } else {
            const product = {
                id: props.id,  // Ensure the product has a unique id
                title: props.title,
                image: props.image,
                desc: props.desc,
                price: props.price
            };
            addToCart(product);  // Add the product to the cart
            alert(`${props.title} has been added to the cart.`);
        }
    };

    return (
        <div className="w-80 max-w-sm shadow-lg rounded-lg bg-lime-200">
            <img src={props.image} className="w-full h-80 object-cover" alt={props.title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
                <h2 className="text-xl font-semibold mb-2">{props.price}</h2>
                <p className="text-sm mb-4">{props.desc}</p>
                <button 
                    onClick={handleAddToCart} 
                    className="bg-lime-500 text-white font-bold py-2 px-4 rounded hover:bg-lime-600"
                >
                    {props.BText}
                </button>
            </div>
        </div>
    );
}

export default CardProduct;
