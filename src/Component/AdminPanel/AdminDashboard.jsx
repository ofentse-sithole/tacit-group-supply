// pages/admin/AdminDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AdminPanel/LoginDetails/context/AdminAuth';
import SaleItemForm from '../AdminPanel/AdminSalePlatform/AdminSaleForm';
import SaleItemsList from '../AdminPanel/AdminSalePlatform/AdminSalesItemList';
import { FiLogOut, FiPlusCircle, FiXCircle, FiBox, FiMenu, FiGrid, FiList } from 'react-icons/fi';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from './Firebase/config'; 
import './AdminDashboard.css';

function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [saleItems, setSaleItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardStats, setDashboardStats] = useState({
    totalItems: 0,
    activeItems: 0,
    recentlyAdded: 0
  });

  // Fetch local items and count total items
  useEffect(() => {
    const storedItems = localStorage.getItem('sale_items');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setSaleItems(parsedItems);
      
      // Set total items count from localStorage
      setDashboardStats(prev => ({
        ...prev,
        totalItems: parsedItems.length
      }));
    }
    
    // Set view mode based on screen size
    const handleResize = () => {
      setViewMode(window.innerWidth < 768 ? 'list' : 'grid');
    };
    
    // Set initial view mode
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch active items and recently added from Firestore
  useEffect(() => {
    const fetchFirestoreData = async () => {
      setIsLoading(true);
      try {
        // Get active items (not sold)
        const activeItemsQuery = query(
          collection(db, 'saleItems'),
          where('isSold', '==', false)
        );
        const activeItemsSnapshot = await getDocs(activeItemsQuery);
        const activeItemsCount = activeItemsSnapshot.size;
        
        // Get recently added items (last 7 days)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const oneWeekAgoTimestamp = Timestamp.fromDate(oneWeekAgo);
        
        const recentItemsQuery = query(
          collection(db, 'saleItems'),
          where('dateAdded', '>=', oneWeekAgoTimestamp)
        );
        const recentItemsSnapshot = await getDocs(recentItemsQuery);
        const recentItemsCount = recentItemsSnapshot.size;
        
        // Update dashboard stats
        setDashboardStats(prev => ({
          ...prev,
          activeItems: activeItemsCount,
          recentlyAdded: recentItemsCount
        }));
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchFirestoreData();
    
    // Set up interval to refresh data every 5 minutes
    const intervalId = setInterval(() => {
      fetchFirestoreData();
    }, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Update local storage when items change
  useEffect(() => {
    localStorage.setItem('sale_items', JSON.stringify(saleItems));
    
    // Update total items count
    setDashboardStats(prev => ({
      ...prev,
      totalItems: saleItems.length
    }));
  }, [saleItems]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString(),
      isSold: false
    };
    setSaleItems([...saleItems, newItem]);
    setShowForm(false);
  };

  const updateItem = (updatedItem) => {
    setSaleItems(saleItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
    setEditingItem(null);
    setShowForm(false);
  };

  const deleteItem = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setSaleItems(saleItems.filter(item => item.id !== itemId));
    }
  };

  const startEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
    // Scroll to form on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document.querySelector('.form-container')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <div className="brand-section">
          <h1><FiBox className="header-icon" /> Admin Dashboard</h1>
        </div>
        
        <div className={`user-actions ${mobileMenuOpen ? 'menu-open' : ''}`}>
          <div className="user-info">
            <div className="user-avatar">
              {user?.username?.charAt(0).toUpperCase() || 'A'}
            </div>
            <span className="username">{user?.username || 'Admin'}</span>
          </div>
          <button onClick={handleLogout} className="logout-button">
            <FiLogOut className="button-icon" /> Logout
          </button>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <FiMenu />
        </button>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Items</h3>
          <p className="stat-value">{dashboardStats.totalItems}</p>
        </div>
        <div className="stat-card">
          <h3>Active Items</h3>
          <p className="stat-value">
            {isLoading ? <span className="loading-indicator">Loading...</span> : dashboardStats.activeItems}
          </p>
        </div>
        <div className="stat-card">
          <h3>Recently Added</h3>
          <p className="stat-value">
            {isLoading ? <span className="loading-indicator">Loading...</span> : dashboardStats.recentlyAdded}
          </p>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="content-header">
          <div className="header-left">
            <h2>Sale Items Management</h2>
            <div className="view-toggle">
              <button 
                className={`view-toggle-button ${viewMode === 'grid' ? 'active' : ''}`} 
                onClick={() => setViewMode('grid')}
              >
                <FiGrid /> Grid
              </button>
              <button 
                className={`view-toggle-button ${viewMode === 'list' ? 'active' : ''}`} 
                onClick={() => setViewMode('list')}
              >
                <FiList /> List
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setEditingItem(null);
              setShowForm(!showForm);
            }}
            className="action-button"
          >
            {showForm ? (
              <><FiXCircle className="button-icon" /> Cancel</>
            ) : (
              <><FiPlusCircle className="button-icon" /> Add New Item</>
            )}
          </button>
        </div>
        
        {showForm ? (
          <div className="form-container">
            <SaleItemForm 
              onSubmit={editingItem ? updateItem : addItem} 
              initialData={editingItem}
            />
          </div>
        ) : (
          <SaleItemsList 
            items={saleItems} 
            onEdit={startEdit} 
            onDelete={deleteItem}
            viewMode={viewMode}
          />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;