// pages/admin/AdminDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AdminAuth';
import SaleItemForm from '../AdminPanel/AdminSalePlatform/AdminSaleForm';
import SaleItemsList from '../AdminPanel/AdminSalePlatform/AdminSalesItemList';
import './AdminDashboard.css';

function AdminDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [saleItems, setSaleItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const storedItems = localStorage.getItem('sale_items');
    if (storedItems) {
      setSaleItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sale_items', JSON.stringify(saleItems));
  }, [saleItems]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString()
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
        <h1>Admin Dashboard</h1>
        <div className="user-actions">
          <span>Welcome, {user?.username}</span>
          <button onClick={handleLogout} className="logout-button">Logout</button>
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
            {showForm ? 'Cancel' : 'Add New Item'}
          </button>
        </div>
        
        {showForm ? (
          <SaleItemForm 
            onSubmit={editingItem ? updateItem : addItem} 
            initialData={editingItem}
          />
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