import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const plantsArray = [
    {
        category: "Air Purifying",
        plants: [
            { id: 1, name: "Snake Plant", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=400", cost: "$15" },
            { id: 2, name: "Spider Plant", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400", cost: "$12" },
            { id: 3, name: "Peace Lily", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400", cost: "$18" },
            { id: 4, name: "Boston Fern", image: "https://images.unsplash.com/photo-1596547609652-9fc5d8d428ae?w=400", cost: "$10" },
            { id: 5, name: "Rubber Plant", image: "https://images.unsplash.com/photo-1654157925394-4b7809721149?w=400", cost: "$20" },
            { id: 6, name: "Aloe Vera", image: "https://images.unsplash.com/photo-1579888944596-3c22b9f3900b?w=400", cost: "$14" }
        ]
    },
    {
        category: "Succulents",
        plants: [
            { id: 7, name: "Jade Plant", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=400", cost: "$15" },
            { id: 8, name: "Echeveria", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400", cost: "$12" },
            { id: 9, name: "Zebra Plant", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400", cost: "$18" },
            { id: 10, name: "String of Pearls", image: "https://images.unsplash.com/photo-1596547609652-9fc5d8d428ae?w=400", cost: "$10" },
            { id: 11, name: "Panda Plant", image: "https://images.unsplash.com/photo-1654157925394-4b7809721149?w=400", cost: "$20" },
            { id: 12, name: "Burro's Tail", image: "https://images.unsplash.com/photo-1579888944596-3c22b9f3900b?w=400", cost: "$14" }
        ]
    },
    {
        category: "Flowering",
        plants: [
            { id: 13, name: "Orchid", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=400", cost: "$25" },
            { id: 14, name: "Anthurium", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400", cost: "$22" },
            { id: 15, name: "African Violet", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400", cost: "$15" },
            { id: 16, name: "Bromeliad", image: "https://images.unsplash.com/photo-1596547609652-9fc5d8d428ae?w=400", cost: "$18" },
            { id: 17, name: "Kalanchoe", image: "https://images.unsplash.com/photo-1654157925394-4b7809721149?w=400", cost: "$12" },
            { id: 18, name: "Crown of Thorns", image: "https://images.unsplash.com/photo-1579888944596-3c22b9f3900b?w=400", cost: "$20" }
        ]
    }
];

const ProductList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [showCart, setShowCart] = useState(false);

    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white' }}>
                <div className="nav-logo">
                    <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(false); }} style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>Paradise Nursery</a>
                </div>
                <div className="nav-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(false); }} style={{ color: 'white', textDecoration: 'none' }}>Plants</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(true); }} style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span style={{ marginLeft: '5px', backgroundColor: '#fff', color: '#4CAF50', borderRadius: '50%', padding: '2px 8px', fontWeight: 'bold' }}>
                            {totalCartItems}
                        </span>
                    </a>
                </div>
            </nav>

            {showCart ? (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            ) : (
                <div className="product-list-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Our Houseplants</h1>
                    {plantsArray.map((category, index) => (
                        <div key={index} style={{ marginBottom: '40px' }}>
                            <h2 style={{ borderBottom: '2px solid #4CAF50', paddingBottom: '10px', marginBottom: '20px' }}>{category.category}</h2>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {category.plants.map((plant) => {
                                    const isInCart = cartItems.some(item => item.name === plant.name);
                                    return (
                                        <div key={plant.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                            <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                                            <h3 style={{ margin: '15px 0 10px' }}>{plant.name}</h3>
                                            <p style={{ fontSize: '18px', color: '#555', marginBottom: '15px' }}>{plant.cost}</p>
                                            <button 
                                                onClick={() => handleAddToCart(plant)} 
                                                disabled={isInCart}
                                                style={{ padding: '10px 20px', backgroundColor: isInCart ? '#ccc' : '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: isInCart ? 'not-allowed' : 'pointer', width: '100%', fontWeight: 'bold' }}
                                            >
                                                {isInCart ? "Added to Cart" : "Add to Cart"}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
