import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";

export default function Product() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    let { productId } = useParams()

    useEffect(() => {
        fetch('http://localhost:7070/products')
        .then((res) => res.json())
        .then((res) => setProducts(res));
    },[])
 
    useEffect(() => {
        const matchingProduct = products.find((p) => p.title === productId)
        if (matchingProduct) {
            setProduct(matchingProduct)
        } else {
            return 'need other logic here'
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:7070/products/:id')
    //     .then((res) => res.json())
    //     .then((res) => setProduct(res));
    // },[])

    return (
        <>
            {product ? <div key={product.id}>
                <h4 className='product-title'>{product.title}</h4>
                <p className='product-price'>€ {product.price}</p>
                <div className='quantity-wrapper'>
                <p className='quantity'>Quantity</p>
                {/* <button className='quantity__reduce' onClick={() => setItemQuantity(prev => prev - 1)}>-</button>
                    {itemQuantity < 0 ? setItemQuantity(1) : itemQuantity}
                <button className='quantity__increase' onClick={() => setItemQuantity(prev => prev + 1)}>+</button> */}
                </div>
                <div className='product-description'>
                    {product.description}
                </div>
                </div> : <CircleLoader color='#5DA69E' />}
        </>

        
    )
}
