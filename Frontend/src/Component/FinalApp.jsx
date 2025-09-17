import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProductProvider } from './Context';
import Navbar from './NavBar';
import Home from './Home';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </ProductProvider>
    </Router>
  );
}

export default App;
