import React from 'react';
import { useCart } from './CartContext';  // Import CartContext

function Cart() {
    const { cart, removeFromCart } = useCart();  // Access cart and removeFromCart from CartContext

    return (
        <div className="p-4">
            <h1 className="text-4xl mb-6">My Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. Add some products to your cart.</p>
            ) : (
                <div>
                    {cart.map((product) => (
                        <div key={product.id} className="flex justify-between items-center mb-4 p-4 bg-lime-100 rounded-lg">
                            <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
                            <div>
                                <h3 className="font-semibold">{product.title}</h3>
                                <p>{product.desc}</p>
                                <p className="font-bold">{product.price}</p>
                            </div>
                            <button 
                                onClick={() => removeFromCart(product.id)} 
                                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
