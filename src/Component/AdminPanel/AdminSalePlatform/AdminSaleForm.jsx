// components/admin/SaleItemForm.js
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Make sure to install axios with npm install axios
import './AdminSaleForm.css';

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
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
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

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    
    try {
      const uploadedImagePaths = await uploadImages(files);
      
      const newUploadedFiles = [...uploadedFiles];
      const newImages = [...formData.images];

      uploadedImagePaths.forEach((imagePath, index) => {
        const file = files[index];
        newUploadedFiles.push({
          name: file.name,
          path: imagePath
        });
        newImages.push(imagePath);
      });

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

  // Function to upload images to the server
  const uploadImages = async (files) => {
    const uploadPromises = files.map(async (file) => {
      const formData = new FormData();
      formData.append('image', file);
      
      // Make API request to upload endpoint
      const response = await axios.post('/api/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Return the path where the image was saved
      return response.data.path; // This should be the path like '/public/admin/images/filename.jpg'
    });
    
    return Promise.all(uploadPromises);
  };

  const removeFile = (index) => {
    const newUploadedFiles = [...uploadedFiles];
    const newImages = [...formData.images];
    
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
          {initialData ? 'Update Item' : 'Add Item'}
        </button>
      </div>
    </form>
  );
}

export default SaleItemForm;