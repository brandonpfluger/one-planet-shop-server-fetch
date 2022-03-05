import { useState, useEffect } from "react";

export default function Review() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://one-planet-server.herokuapp.com/reviews')
        .then((res) => res.json())
        .then((res) => setReviews(res));
      },[])  
  
    return (
        <>
            {reviews.map((review, index) => (
                <>
                    <h2>{review.headline}</h2>
                    <p>{review.review}</p>
                    <p>{review.rating}</p>
                </>
            ))}
        </>
    )
}