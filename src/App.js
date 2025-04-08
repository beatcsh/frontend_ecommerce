import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './index.css'
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import DetailsPage from './pages/ProductDetails';
import AccountPage from './pages/Account';
import AboutUsPage from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
