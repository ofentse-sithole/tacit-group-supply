// components/admin/SaleItemForm.js
import React, { useState, useEffect, useRef } from 'react';
import './AdminSaleForm.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';

// Firebase configuration - replace with your actual Firebase config
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

// Cloudinary configuration
const CLOUDINARY_UPLOAD_PRESET = 'ml_default'; 
const CLOUDINARY_CLOUD_NAME = 'dmdnzchlf';
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

function SaleItemForm({ onSubmit, initialData }) {
  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    originalPrice: '',
    salePrice: '',
    images: [],
    category: '',
    itemId: null, // For tracking existing items
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        itemId: initialData.id || null
      });
      if (initialData.images && initialData.images.length > 0) {
        // Convert paths to file info objects
        const fileInfos = initialData.images.map(path => {
          const fileName = path.split('/').pop();
          return {
            name: fileName,
            path: path
          };
        });
        setUploadedFiles(fileInfos);
      }
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'admin/images'); // Optional: organize into folders
    
    const response = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error('Failed to upload to Cloudinary');
    }
    
    const data = await response.json();
    return {
      name: file.name,
      path: data.secure_url,
      publicId: data.public_id
    };
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    
    try {
      const uploadPromises = files.map(file => uploadToCloudinary(file));
      const uploadedFileInfos = await Promise.all(uploadPromises);
      
      const newUploadedFiles = [...uploadedFiles, ...uploadedFileInfos];
      const newImages = [...formData.images, ...uploadedFileInfos.map(file => file.path)];
      
      setUploadedFiles(newUploadedFiles);
      setFormData({
        ...formData,
        images: newImages
      });
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (index) => {
    const newUploadedFiles = [...uploadedFiles];
    const newImages = [...formData.images];
    
    // Note: To fully delete from Cloudinary, you would need to make an API call
    // using the public_id, but we're just removing from the form here
    
    newUploadedFiles.splice(index, 1);
    newImages.splice(index, 1);
    
    setUploadedFiles(newUploadedFiles);
    setFormData({
      ...formData,
      images: newImages
    });
  };

  const getFileExtension = (filename) => {
    return filename.split('.').pop();
  };
  
  const saveToFirestore = async (data) => {
    try {
      const itemData = {
        name: data.name,
        description: data.description,
        originalPrice: parseFloat(data.originalPrice),
        salePrice: parseFloat(data.salePrice),
        images: data.images,
        category: data.category,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      let docRef;
      
      if (data.itemId) {
        // Update existing document
        docRef = doc(db, "saleItems", data.itemId);
        await updateDoc(docRef, {
          ...itemData,
          createdAt: undefined, // Don't update creation timestamp
          updatedAt: new Date() // Update the updatedAt timestamp
        });
        return { id: data.itemId, ...itemData };
      } else {
        // Create new document
        docRef = await addDoc(collection(db, "saleItems"), itemData);
        return { id: docRef.id, ...itemData };
      }
    } catch (error) {
      console.error("Error saving to Firestore:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Save to Firestore
      const savedItem = await saveToFirestore(formData);
      
      // Then call the onSubmit prop with the saved item
      if (onSubmit) {
        onSubmit(savedItem);
      }
      
      // Clear form if it's a new item
      if (!formData.itemId) {
        setFormData({
          name: '',
          description: '',
          originalPrice: '',
          salePrice: '',
          images: [],
          category: '',
          itemId: null
        });
        setUploadedFiles([]);
      }
      
      alert(formData.itemId ? "Item updated successfully!" : "Item added successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to save item. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sale-item-form">
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="originalPrice">Original Price (R)</label>
          <input
            id="originalPrice"
            name="originalPrice"
            type="number"
            step="0.01"
            value={formData.originalPrice}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="salePrice">Sale Price (R)</label>
          <input
            id="salePrice"
            name="salePrice"
            type="number"
            step="0.01"
            value={formData.salePrice}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label>Product Images</label>
        <div className="image-upload-container">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="file-input"
            id="imageUpload"
            disabled={uploading}
          />
          <button 
            type="button" 
            className="upload-button"
            onClick={() => fileInputRef.current.click()}
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload Images'}
          </button>
          <small>You can upload multiple images from your phone</small>
        </div>
        
        {uploadedFiles.length > 0 && (
          <div className="file-list-container">
            <h4>Uploaded Files:</h4>
            <ul className="file-list">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="file-item">
                  <span className="file-name">{file.name}</span>
                  <span className="file-extension">.{getFileExtension(file.name)}</span>
                  <button
                    type="button"
                    className="remove-file-btn"
                    onClick={() => removeFile(index)}
                    disabled={uploading}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {uploadedFiles.length > 0 && (
          <div className="image-preview-container">
            <h4>Image Previews:</h4>
            <div className="image-preview-grid">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="image-preview-item">
                  <img src={file.path} alt={file.name} className="image-preview" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home & Garden</option>
          <option value="books">Books</option>
          <option value="toys">Toys</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-actions">
        <button type="submit" className="submit-button" disabled={uploading}>
          {formData.itemId ? 'Update Item' : 'Add Item'}
        </button>
      </div>
    </form>
  );
}

export default SaleItemForm;