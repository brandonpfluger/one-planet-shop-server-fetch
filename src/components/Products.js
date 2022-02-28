import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7070/products')
        .then((res) => res.json())
        .then((res) => setProducts(res));
    },[])

    return (
        <div>
            {products.map((product, index) => 
            (
                <>
                    <h1>{product.title}</h1>
                    {/* <p>{product.description}</p> */}
                    <p>{product.price}</p>
                    {/* <p>{product.weight}</p> */}
                </>
            ))}
        </div>
    )
}
