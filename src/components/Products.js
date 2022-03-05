import '../styles/products.css'

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7070/products')
        .then((res) => res.json())
        .then((res) => setProducts(res))
    },[])

    return (
        <main>
            <h1>Products</h1>
            <div className='product-grid'>
            {products.map((product, index) => 
            (
                <NavLink to={product.title} key={product.id}>
                    <div className='product-listing'>
                        <img className='product-image__main' src={`http://localhost:7070/images/${product.images[0]}`} alt=''></img>
                        <p className='product-title'>{product.title}</p>
                        {/* <p>{product.description}</p> */}
                        <p className='product-price'>{product.price}</p>
                        {/* <p>{product.weight}</p> */}
                    </div>    
                </NavLink>
            ))}
            </div>
        </main>
    )
}
