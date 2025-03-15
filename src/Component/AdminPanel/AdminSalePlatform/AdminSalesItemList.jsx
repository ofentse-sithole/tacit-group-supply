// src/Component/AdminPanel/AdminSalePlatform/AdminSalesItemList.jsx
import React, { useState, useCallback, memo } from 'react';
import './AdminSalesItemList.css'; // Make sure this CSS file exists

// Memoized table row component to prevent unnecessary re-renders
const SaleItemRow = memo(({ item, activeImageIndex, onCycleImage, onEdit, onDelete }) => {
  const hasMultipleImages = item.images && item.images.length > 1;
  
  // Get the current image to display
  const currentImage = item.images && item.images.length > 0 
    ? item.images[activeImageIndex || 0] 
    : item.imageUrl;

  return (
    <tr>
      <td className="item-image">
        <img 
          src={currentImage} 
          alt={item.name} 
          onClick={() => hasMultipleImages && onCycleImage(item.id)}
          className={hasMultipleImages ? "has-multiple-images" : ""}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/placeholder-image.png'; // Fallback image
          }}
        />
        {hasMultipleImages && (
          <span className="image-count">
            {(activeImageIndex || 0) + 1}/{item.images.length}
          </span>
        )}
      </td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>R {parseFloat(item.originalPrice).toFixed(2)}</td>
      <td>R {parseFloat(item.salePrice).toFixed(2)}</td>
      <td className="actions-cell">
        <button 
          onClick={() => onEdit(item)} 
          className="edit-button"
          type="button"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(item.id)} 
          className="delete-button"
          type="button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
});

// Ensure the component name matches the file name
function AdminSalesItemList({ items, onEdit, onDelete }) {
  const [activeImageIndices, setActiveImageIndices] = useState({});

  // Memoized function to cycle through images
  const handleCycleImage = useCallback((itemId) => {
    const item = items.find(i => i.id === itemId);
    if (!item || !item.images || item.images.length <= 1) return;
    
    setActiveImageIndices(prev => {
      const currentIndex = prev[itemId] || 0;
      const nextIndex = (currentIndex + 1) % item.images.length;
      return { ...prev, [itemId]: nextIndex };
    });
  }, [items]);

  if (!items || items.length === 0) {
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
            <SaleItemRow
              key={item.id}
              item={item}
              activeImageIndex={activeImageIndices[item.id]}
              onCycleImage={handleCycleImage}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Make sure to export with the same name as the file
export default AdminSalesItemList;