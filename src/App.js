
import './App.css';
import {useState, useEffect} from 'react';
import Products from './components/Products';
import Product from './components/Product';

function App() {
    
    const [blogPosts, setBlogPosts] = useState([]);
    const [reviews, setReviews] = useState([]);

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
      <div className="App">
        <Products />
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