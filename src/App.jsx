import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/pages/Home';
import Product from './Component/pages/Products';
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import iPhoneProducts from './Component/IPhone/PreOwned_Devices/iPhone_Products'; // Import the default export
import {ProductDetailPage} from './Component/IPhone/PreOwned_Devices/iPhone_Details'; // Import the default export
import Footer from './Component/Footer/Footer';
import PreOwned_Devices from './Component/pages/PreOwnedDevices';
import BrandNew_Devices from './Component/pages/BrandNewDevices';
import Sale from './Component/pages/Sale';

import AdminDashboard from './AdminPanel/AdminDashboard';
import { AuthProvider } from './AdminPanel/LoginDetails/context/AdminAuth';
import ProtectedRoute from './AdminPanel/ProtectedRoute';
import AdminLogins from './AdminPanel/LoginDetails/AdminLogin';

function App() {
  return (
    <AuthProvider>
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/iphone" element={<iPhoneProducts />} /> {/* This is correct */}
          <Route path="/product/iphone/:productId" element={<ProductDetailPage />} />
          <Route path="/products/pre-owned" element={<PreOwned_Devices />} />
          <Route path="/products/new" element={<BrandNew_Devices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/*Added the admin routes */}  
          <Route path="/sale" element={<Sale />} />
          <Route path="/admin/private/secure/login" element={<AdminLogins />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboard />} />} />
        </Routes>
        <Footer/>
      </>
    </Router>
    </AuthProvider>
  );
}

export default App;