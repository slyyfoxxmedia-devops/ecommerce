import React, { useState } from 'react';
import './CreateProduct.css';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    productFile: null,
    productImage: null
  });

  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    
    // TODO: Upload to S3 and save to database
    console.log('Product data:', formData);
    
    setTimeout(() => {
      setUploading(false);
      alert('Product submitted for review!');
    }, 2000);
  };

  return (
    <div className="create-product">
      <div className="card">
        <h2>Create New Product</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label>Product Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Enter product title"
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows="4"
              placeholder="Describe your digital product"
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select category</option>
              <option value="creative-assets">Creative Assets</option>
              <option value="educational">Educational Content</option>
              <option value="software">Software & Tools</option>
            </select>
          </div>

          <div className="form-group">
            <label>Product File *</label>
            <input
              type="file"
              name="productFile"
              onChange={handleFileChange}
              required
              accept=".pdf,.zip,.mp4,.mp3,.jpg,.png"
            />
            <small>Supported: PDF, ZIP, MP4, MP3, JPG, PNG</small>
          </div>

          <div className="form-group">
            <label>Product Image</label>
            <input
              type="file"
              name="productImage"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png"
            />
            <small>Thumbnail image for your product</small>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={uploading}>
              {uploading ? 'Uploading...' : 'Submit Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;