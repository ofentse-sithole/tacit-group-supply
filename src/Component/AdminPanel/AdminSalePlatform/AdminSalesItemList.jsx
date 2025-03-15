import React, { useState, useEffect, useCallback, memo } from 'react';
import './AdminSalesItemList.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQgKGgVPG38utsgj24sdztSsGEWlIql18",
  authDomain: "tacit-group-supply.firebaseapp.com",
  projectId: "tacit-group-supply",
  storageBucket: "tacit-group-supply.firebasestorage.app",
  messagingSenderId: "316012645594",
  appId: "1:316012645594:web:98d172a056d5acb1cba9e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Memoized table row component to prevent unnecessary re-renders
const SaleItemRow = memo(({ item, activeImageIndex, onCycleImage, onEdit, onDelete }) => {
  const hasMultipleImages = item.images && item.images.length > 1;
  
  // Get the current image URL
  const currentImageUrl = item.images && item.images.length > 0
    ? item.images[activeImageIndex || 0]
    : '';
  
  // Get the file type from the URL
  const getFileTypeFromUrl = (url) => {
    if (!url) return 'N/A';
    const extension = url.split('.').pop().toLowerCase();
    return extension.split('?')[0]; // Remove query parameters if present
  };
  
  const fileType = getFileTypeFromUrl(currentImageUrl);

  // Display the Cloudinary image as thumbnail
  const getOptimizedImageUrl = (url) => {
    if (!url || !url.includes('cloudinary.com')) return url;
    
    // This transforms the URL to request a smaller version from Cloudinary
    // Format: https://res.cloudinary.com/cloud_name/image/upload/c_thumb,w_80,h_80/v123/path/to/image.jpg
    const parts = url.split('/upload/');
    if (parts.length !== 2) return url;
    
    return `${parts[0]}/upload/c_thumb,w_80,h_80/${parts[1]}`;
  };

  return (
    <tr className="sales-item-row">
      <td className="file-type-cell">
        {currentImageUrl ? (
          <div className="file-type-container">
            {/* Replace file type text with actual image thumbnail */}
            <div className="image-thumbnail">
              <img 
                src={getOptimizedImageUrl(currentImageUrl)} 
                alt={item.name} 
                className="thumbnail-image"
              />
            </div>
            {hasMultipleImages && (
              <div className="file-counter">
                {(activeImageIndex || 0) + 1}/{item.images.length}
              </div>
            )}
            {hasMultipleImages && (
              <button 
                onClick={() => onCycleImage(item.id)}
                className="cycle-button"
                type="button"
              >
                Next
              </button>
            )}
          </div>
        ) : (
          <div className="file-type-icon">N/A</div>
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

function AdminSalesItemList({ onEdit }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndices, setActiveImageIndices] = useState({});

  // Fetch items from Firestore
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const saleItemsCollection = collection(db, "saleItems");
        const snapshot = await getDocs(saleItemsCollection);
        const fetchedItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setItems(fetchedItems);
      } catch (err) {
        console.error("Error fetching sale items:", err);
        setError("Failed to load sale items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

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

  // Handle item deletion
  const handleDelete = async (itemId) => {
    if (!window.confirm("Are you sure you want to delete this item?")) {
      return;
    }

    try {
      // Delete the document from Firestore
      await deleteDoc(doc(db, "saleItems", itemId));
      
      // Update local state
      setItems(prevItems => prevItems.filter(item => item.id !== itemId));
      
      // Note: To fully delete from Cloudinary, you would need to make additional API calls
      // using the public_id, which would require additional implementation
    } catch (err) {
      console.error("Error deleting item:", err);
      alert("Failed to delete item. Please try again.");
    }
  };

  if (loading) {
    return <div className="loading-spinner">Loading sale items...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!items || items.length === 0) {
    return (
      <div className="no-items-message">
        <p>No sale items found. Add your first item!</p>
      </div>
    );
  }

  return (
    <div className="sales-items-table-container">
      <table className="sales-items-table">
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
              activeImageIndex={activeImageIndices[item.id] || 0}
              onCycleImage={handleCycleImage}
              onEdit={onEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminSalesItemList;