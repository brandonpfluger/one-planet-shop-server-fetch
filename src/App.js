
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Blog from './components/Blog';
import Reviews from './components/Reviews';

function App() {

  function Home() {
    return  'I am the placeholder homepage'
  }

    return (
      <>
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Products />} />
          <Route path='/shop/:productId' element={<Product />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
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