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
        <div>
            {products.map((product, index) => 
            (
                <NavLink to={product.title} key={product.id}>
                    <h1>{product.title}</h1>
                    {/* <p>{product.description}</p> */}
                    <p>{product.price}</p>
                    {/* <p>{product.weight}</p> */}
                </NavLink>
            ))}
        </div>
    )
}
