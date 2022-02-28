import { useState, useEffect } from "react";

export default function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7070/products/:id')
        .then((res) => res.json())
        .then((res) => setProduct(res));
    },[])

    return (
        <>
        {product}
        </>
    )
}
