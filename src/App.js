
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
// import Product from './components/Product';
import Blog from './components/Blog';
import Reviews from './components/Reviews';


function App() {
    return (
      <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Products />} />
          {/* <Route path='/shop/:productId' element={<Product />} /> */}
          <Route path='/blog' element={<Blog />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </div>
      </>
    );
}

export default App;