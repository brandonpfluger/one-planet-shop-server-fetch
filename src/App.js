
import './App.css';
import {useState, useEffect} from 'react';

function App() {
    const [products, setProducts] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch('http://localhost:7070/products')
      .then((res) => res.json())
      .then((res) => setProducts(res));
    },[])

    useEffect(() => {
      fetch('http://localhost:7070/blogposts')
      .then((res) => res.json())
      .then((res) => setBlogPosts(res));
    },[])

    useEffect(() => {
      fetch('http://localhost:7070/reviews')
      .then((res) => res.json())
      .then((res) => setReviews(res));
    },[])


    return (
      <>
      <div>
        {products.map((product, index) => 
        (
          <>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.weight}</p>
          </>
        ))}
      </div>
      <div className="App">
      {blogPosts.map((post, index) =>
        (<>
          <h1>{post.blogTitle}</h1>
        <p>{post.blogText}</p>
        </>
        ))
      }
      </div>
      <div>
        {reviews.map((review, index) =>
        (
          <>
          <h2>{review.headline}</h2>
          <p>{review.review}</p>
          <p>{review.rating}</p>
          </>
        ))}
      </div>
      </>
    );
}

export default App;

// {latestStories.map((story) => (
//   <li>
//     <a href={story.url}>{story.title}</a>
//     <br />
//     Author: {story.author}
//   </li>
// ))}