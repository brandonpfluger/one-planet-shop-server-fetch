
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Blog from './components/Blog';
import Reviews from './components/Reviews';

function App() {

    return (
      <>
      <div className="App">
         I am the placeholder homepage
        <Routes>
          <Route path='/shop' element={<Products />} />
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