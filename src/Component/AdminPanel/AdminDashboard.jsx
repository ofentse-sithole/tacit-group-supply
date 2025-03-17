// pages/admin/AdminDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AdminPanel/LoginDetails/context/AdminAuth';
import SaleItemForm from '../AdminPanel/AdminSalePlatform/AdminSaleForm';
import SaleItemsList from '../AdminPanel/AdminSalePlatform/AdminSalesItemList';
import { FiLogOut, FiPlusCircle, FiXCircle, FiBox } from 'react-icons/fi';
import './AdminDashboard.css';

function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [saleItems, setSaleItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [dashboardStats, setDashboardStats] = useState({
    totalItems: 0,
    activeItems: 0,
    recentlyAdded: 0
  });

  useEffect(() => {
    const storedItems = localStorage.getItem('sale_items');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setSaleItems(parsedItems);
      
      // Calculate dashboard stats
      const now = new Date();
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      
      setDashboardStats({
        totalItems: parsedItems.length,
        activeItems: parsedItems.filter(item => !item.isSold).length,
        recentlyAdded: parsedItems.filter(item => new Date(item.dateAdded) > oneWeekAgo).length
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sale_items', JSON.stringify(saleItems));
    
    // Update stats whenever items change
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    setDashboardStats({
      totalItems: saleItems.length,
      activeItems: saleItems.filter(item => !item.isSold).length,
      recentlyAdded: saleItems.filter(item => new Date(item.dateAdded) > oneWeekAgo).length
    });
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
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <br/>
        <br/>
        <br/>
        <div className="brand-section">
          <h1><FiBox className="header-icon" /> Admin Dashboard</h1>
        </div>
        <div className="user-actions">
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
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Items</h3>
          <p className="stat-value">{dashboardStats.totalItems}</p>
        </div>
        <div className="stat-card">
          <h3>Active Items</h3>
          <p className="stat-value">{dashboardStats.activeItems}</p>
        </div>
        <div className="stat-card">
          <h3>Recently Added</h3>
          <p className="stat-value">{dashboardStats.recentlyAdded}</p>
        </div>
      </div>
      
      <div className="dashboard-content">
        <div className="content-header">
          <h2>Sale Items Management</h2>
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
          />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;