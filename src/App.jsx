import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/pages/Home';
import Product from './Component/pages/Products';
import Contact from './Component/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import iPhoneProducts from './Component/IPhone/PreOwned_Devices/iPhone_Products'; // Import the default export
import {ProductDetailPage} from './Component/IPhone/PreOwned_Devices/iPhone_Details'; // Import the default export
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/iphone" element={<iPhoneProducts />} /> {/* This is correct */}
          <Route path="/product/iphone/:productId" element={<ProductDetailPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;