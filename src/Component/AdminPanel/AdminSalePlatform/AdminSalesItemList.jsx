// Component/AdminPanel/AdminSalePlatform/SaleItemsList.jsx
import React from 'react';
import './AdminSalesItemList.css';

function SaleItemsList({ items, onEdit, onDelete }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>No sale items found. Add your first item!</p>
      </div>
    );
  }

  return (
    <div className="sale-items-list">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Original Price</th>
            <th>Sale Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="item-image">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-image.png'; // Fallback image
                  }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>${parseFloat(item.originalPrice).toFixed(2)}</td>
              <td>${parseFloat(item.salePrice).toFixed(2)}</td>
              <td className="actions-cell">
                <button 
                  onClick={() => onEdit(item)} 
                  className="edit-button"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(item.id)} 
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SaleItemsList;