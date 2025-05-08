import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/pages/Home';
import Product from './Component/pages/Products';
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import iPhoneProducts from './Component/IPhone/PreOwned_Devices/iPhone_Products';
import { ProductDetailPage } from './Component/IPhone/PreOwned_Devices/iPhone_Details';
import {BrandNew_Details} from './Component/IPhone/BrandNew_Devices/iPhone_BrandNew_Details';
import {AirPods_Details} from './Component/IPhone/AirPods/AirPods_Details';
import Footer from './Component/Footer/Footer';
import PreOwned_Devices from './Component/pages/PreOwnedDevices';
import BrandNew_Devices from './Component/pages/BrandNewDevices';
import Sale from './Component/pages/Sale';
import SalesProductDetails from './Component/IPhone/Sales/SalesProducts_Details';
import ScrollToTop from './Component/pages/ScrollTop';
import AirPods from './Component/pages/AirPods';
import PolicyTradeIn from './Component/pages/Policy';
import AdminDashboard from './Component/AdminPanel/AdminDashboard';
import { AuthProvider } from './Component/AdminPanel/LoginDetails/context/AdminAuth';
import ProtectedRoute from './Component/AdminPanel/ProtectedRoute';
import AdminLogins from './Component/AdminPanel/LoginDetails/AdminLogin';

function AppContent() {
  const location = useLocation();

  // Check if current route is admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/iphone" element={<iPhoneProducts />} />

        {/*Used iPhone Routes*/}
        <Route path="/product/iphone/:productId" element={<ProductDetailPage />} />
        <Route path="/products/pre-owned" element={<PreOwned_Devices />} />

        {/*New iPhone Routes*/}
        <Route path="/products/new" element={<BrandNew_Devices />} />
        <Route path="/product/brandnew/:productId" element={<BrandNew_Details />} />

        {/*AirPods - FIXED: Changed route path to avoid conflict*/}
        <Route path="/products/airpods" element={<AirPods />} />
        <Route path="/product/airpods/:productId" element={<AirPods_Details />} /> {/* Changed from /product/iphone/:productId */}

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/sale/:productId" element={<SalesProductDetails />} />

        <Route path="/policy" element={<PolicyTradeIn />} />
        {/* Admin routes */}
        <Route path="/admin/private/secure/login" element={<AdminLogins />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboard />} />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;